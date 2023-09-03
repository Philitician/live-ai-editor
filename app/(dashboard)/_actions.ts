"use server";

import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import { document } from "@/drizzle/schema";
import { revalidatePath } from "next/cache";

export const deleteDocument = async (id: string) => {
  await db.delete(document).where(eq(document.id, id));
  revalidatePath("/");
};
