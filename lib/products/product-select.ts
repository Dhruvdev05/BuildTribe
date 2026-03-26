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

export async function getRecentlyLaunchedProducts() {
  const productData = await getFeaturedProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productData.filter((product) => product.createdAt && 
new Date(product.createdAt.toISOString()) >= oneWeekAgo);

console.log("Recently Launched Products:", productData);
}