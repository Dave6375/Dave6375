import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

const connectionString = process.env.REACT_APP_DATABASE_URL || 'your-neon-connection-string';

const sql = neon(connectionString);
export const db = drizzle(sql, { schema });