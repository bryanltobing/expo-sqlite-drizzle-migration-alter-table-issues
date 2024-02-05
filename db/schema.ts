import { sql } from "drizzle-orm";
import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const book = sqliteTable('book', {
  id: integer('id').primaryKey(),
  title: text("note"),
  description: text("description"),
  createdAt: integer("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer("updated_at"),
});