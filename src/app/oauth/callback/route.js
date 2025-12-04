export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

export function GET() {
  return new Response("OAuth callback route active.");
}