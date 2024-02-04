import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const table = sqliteTable('table', {
  id: integer('id').primaryKey(),
  title: text("note"),
  description: text("description")
});