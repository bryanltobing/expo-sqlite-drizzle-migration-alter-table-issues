import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const book = sqliteTable('book', {
  id: integer('id').primaryKey(),
  title: text("note"),
});