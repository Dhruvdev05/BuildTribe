import { db } from "@/db";
import { products } from "@/db/schema";
import { eq, gte, and,desc } from "drizzle-orm";
import { SingleStorePreparedQuery } from "drizzle-orm/singlestore-core";
import { connection } from "next/server";
import { resolve } from "path";

export async function getFeaturedProducts() {
  "use cache"
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

export async function getAllProducts() {
  const productData = await db
    .select()
    .from(products)
    .where(eq(products.status, "approved"))
    .orderBy(desc(products.voteCount));

  return productData;
}

export async function getRecentlyLaunchedProducts() {
await connection; // Ensure the database connection is established
  const productData = await getAllProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productData.filter((product) => product.createdAt && 
new Date(product.createdAt.toISOString()) >= oneWeekAgo);

console.log("Recently Launched Products:", productData);
}