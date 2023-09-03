import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const document = sqliteTable("document", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  title: text("title").notNull().default("Undefined"),
  content: text("content"),
});

export type Document = typeof document.$inferSelect;
export type DocumentInsert = typeof document.$inferInsert;
