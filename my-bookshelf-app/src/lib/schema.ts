import { pgTable, serial, varchar, timestamp, text } from 'drizzle-orm/pg-core';

// Basic user table for your object identification app
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
});

// Table to store analysis results
export const analyses = pgTable('analyses', {
  id: serial('id').primaryKey(),
  userId: serial('user_id').references(() => users.id),
  imageUrl: varchar('image_url', { length: 500 }),
  results: text('results'), // JSON string of identified objects
  createdAt: timestamp('created_at').defaultNow(),
})