import { type NextRequest, NextResponse } from "next/server";
import { get, head } from "@vercel/blob";

const ALLOWED = new Set(["fencing_1.mp4", "fencing_2.mp4", "fencing_3.mp4"]);
const CANONICAL_HOST = "hapoel-ashkelon.vercel.app";

function canonicalRedirect(request: NextRequest, pathname: string) {
  const url = new URL(`https://${CANONICAL_HOST}/api/fencing-video`);
  url.searchParams.set("pathname", pathname);
  return NextResponse.redirect(url, 307);
}

function validPath(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get("pathname");
  if (!pathname || !ALLOWED.has(pathname)) return null;
  return pathname;
}

export async function HEAD(request: NextRequest) {
  const pathname = validPath(request);
  if (!pathname) return new NextResponse(null, { status: 404 });
  if (request.nextUrl.hostname !== CANONICAL_HOST) return canonicalRedirect(request, pathname);

  try {
    const blob = await head(pathname);
    return new NextResponse(null, {
      status: 200,
      headers: {
        "Content-Type": blob.contentType || "video/mp4",
        "Content-Length": String(blob.size),
        "Accept-Ranges": "bytes",
        ETag: blob.etag,
        "Cache-Control": "private, no-cache",
        "Content-Disposition": "inline",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}

export async function GET(request: NextRequest) {
  const pathname = validPath(request);
  if (!pathname) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (request.nextUrl.hostname !== CANONICAL_HOST) return canonicalRedirect(request, pathname);

  try {
    // Private Blob storage is served through this Function. The Blob SDK's
    // supported get() API streams the complete object and handles auth with
    // BLOB_READ_WRITE_TOKEN automatically on Vercel.
    const result = await get(pathname, {
      access: "private",
      ifNoneMatch: request.headers.get("if-none-match") ?? undefined,
    });

    if (!result) return new NextResponse("Not found", { status: 404 });

    if (result.statusCode === 304) {
      return new NextResponse(null, {
        status: 304,
        headers: {
          ETag: result.blob.etag,
          "Cache-Control": "private, no-cache",
        },
      });
    }

    if (result.statusCode !== 200 || !result.stream) {
      return new NextResponse("Not found", { status: 404 });
    }

    const headers = new Headers({
      "Content-Type": result.blob.contentType || "video/mp4",
      "Content-Disposition": "inline",
      "Accept-Ranges": "bytes",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "private, no-cache",
      ETag: result.blob.etag,
    });

    if (result.blob.size != null) headers.set("Content-Length", String(result.blob.size));

    return new NextResponse(result.stream, { status: 200, headers });
  } catch {
    return new NextResponse("Video unavailable", { status: 503 });
  }
}
