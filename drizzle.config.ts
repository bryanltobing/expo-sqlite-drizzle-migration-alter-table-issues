import type { Config } from 'drizzle-kit';
export default {
  schema: './db/schema.ts', // <--- add this
  out: './drizzle', // <--- add this
  driver: 'expo', // <--- very important
} satisfies Config;