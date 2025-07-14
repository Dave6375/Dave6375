import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

const connectionString = process.env.REACT_APP_DATABASE_URL || 'postgresql://localhost:5432/mydb';

// Create the connection
const pool = new Pool({ connectionString });
export const db = drizzle(pool, { schema });