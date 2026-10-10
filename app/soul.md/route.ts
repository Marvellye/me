import { readFile } from "fs/promises";
import { join } from "path";

export const dynamic = "force-static";

export async function GET() {
  const raw = await readFile(join(process.cwd(), "SOUL.md"), "utf-8");
  return new Response(raw, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
