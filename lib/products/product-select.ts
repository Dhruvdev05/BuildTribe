import { db } from "@/db";
import { products } from "@/db/schema";
import { eq, gte, and } from "drizzle-orm";

export async function getFeaturedProducts() {
  const productData = await db
    .select()
    .from(products)
    .where(
      and(
        gte(products.voteCount, 200),
        eq(products.status, "approved")
      )
    );

  return productData;
}