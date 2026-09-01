import { type NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/blob";

const ALLOWED = new Set(["fencing_1.mp4", "fencing_2.mp4", "fencing_3.mp4"]);
const CANONICAL_HOST = "hapoel-ashkelon.vercel.app";

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get("pathname");

  if (!pathname || !ALLOWED.has(pathname)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Only the canonical production project is connected to the private Blob store.
  // Secondary Vercel deployments redirect media requests to the canonical API
  // instead of attempting Blob access without credentials.
  if (request.nextUrl.hostname !== CANONICAL_HOST) {
    const canonicalUrl = new URL(`https://${CANONICAL_HOST}/api/fencing-video`);
    canonicalUrl.searchParams.set("pathname", pathname);
    return NextResponse.redirect(canonicalUrl, 307);
  }

  const result = await get(pathname, { access: "private" });

  if (!result || result.statusCode !== 200) {
    return new NextResponse("Not found", { status: 404 });
  }

  return new NextResponse(result.stream, {
    headers: {
      "Content-Type": result.blob.contentType || "video/mp4",
      "Accept-Ranges": "bytes",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
