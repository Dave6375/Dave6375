import { pgTable, serial, varchar, timestamp, text, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export const objectAnalyses = pgTable('object_analyses', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  objectName: varchar('object_name', { length: 255 }),
  category: varchar('category', { length: 100 }),
  history: text('history'),
  chemicalCompound: text('chemical_compound'),
  confidence: integer('confidence'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Export types (this works without drizzle-zod)
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type ObjectAnalysis = typeof objectAnalyses.$inferSelect;
export type NewObjectAnalysis = typeof objectAnalyses.$inferInsert;