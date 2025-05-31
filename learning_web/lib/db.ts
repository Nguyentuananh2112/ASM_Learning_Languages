import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

// Lấy URL kết nối từ biến môi trường
const connectionString = process.env.DATABASE_URL!;

// Tạo client Neon
const sql = neon(connectionString);

// Tạo đối tượng db sử dụng Drizzle
export const db = drizzle(sql, { schema }); 