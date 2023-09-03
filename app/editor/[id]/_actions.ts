"use server";
import { db } from "@/drizzle/db";
import { document } from "@/drizzle/schema";

export const updateTitle = async (title: string) =>
  await db.update(document).set({ title });

export const updateContent = async (content: string) =>
  await db.update(document).set({ content });
