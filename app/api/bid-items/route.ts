import { getBidItems } from "@/src/api/bid-items";

export async function GET() {
  const results = await getBidItems();
  return Response.json(results);
}
