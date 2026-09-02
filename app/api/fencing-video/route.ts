import { type NextRequest, NextResponse } from "next/server";
import { get, head } from "@vercel/blob";

const ALLOWED = new Set(["fencing_1.mp4", "fencing_2.mp4", "fencing_3.mp4"]);
const CANONICAL_HOST = "hapoel-ashkelon.vercel.app";

function canonicalRedirect(request: NextRequest, pathname: string) {
  const canonicalUrl = new URL(`https://${CANONICAL_HOST}/api/fencing-video`);
  canonicalUrl.searchParams.set("pathname", pathname);
  return NextResponse.redirect(canonicalUrl, 307);
}

export async function HEAD(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get("pathname");

  if (!pathname || !ALLOWED.has(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  if (request.nextUrl.hostname !== CANONICAL_HOST) {
    return canonicalRedirect(request, pathname);
  }

  try {
    const blob = await head(pathname);
    if (!blob) return new NextResponse(null, { status: 404 });

    return new NextResponse(null, {
      status: 200,
      headers: {
        "Content-Type": blob.contentType || "video/mp4",
        "Content-Length": String(blob.size),
        "Accept-Ranges": "bytes",
        ETag: blob.etag,
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        "Content-Disposition": "inline",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get("pathname");

  if (!pathname || !ALLOWED.has(pathname)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (request.nextUrl.hostname !== CANONICAL_HOST) {
    return canonicalRedirect(request, pathname);
  }

  try {
    // Browsers (especially Safari/iOS) use HTTP Range requests for MP4 playback.
    // Forward the Range header to Blob so seeking and progressive playback work.
    const range = request.headers.get("range");
    const result = await get(pathname, {
      access: "private",
      headers: range ? { Range: range } : undefined,
    });

    const statusCode = Number(result?.statusCode ?? 404);
    if (!result || (statusCode !== 200 && statusCode !== 206) || !result.stream) {
      return new NextResponse("Not found", { status: 404 });
    }

    const headers = new Headers();
    headers.set("Content-Type", result.blob.contentType || "video/mp4");
    headers.set("Accept-Ranges", "bytes");
    headers.set("Content-Disposition", "inline");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400");

    // Preserve the range metadata returned by Vercel Blob.
    for (const name of ["content-length", "content-range", "etag", "last-modified"]) {
      const value = result.headers.get(name);
      if (value) headers.set(name, value);
    }

    return new NextResponse(result.stream, {
      status: statusCode,
      headers,
    });
  } catch {
    return new NextResponse("Video unavailable", { status: 503 });
  }
}
