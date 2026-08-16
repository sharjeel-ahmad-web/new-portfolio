/**
 * ⚡ Singleton Database Connection Pattern
 * Enterprise-grade MongoDB/Mongoose connection management
 * Prevents connection pooling issues in Next.js serverless environment
 * 
 * Usage: import { getDB } from '@/lib/db'
 * const client = await getDB();
 */

import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

// Prevent TypeScript errors
interface CachedConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Global cache - persists across hot reloads in development
let cached: CachedConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

/**
 * Singleton function to get/create MongoDB connection
 * Guarantees only one active connection at any time
 */
export async function getDB(): Promise<Mongoose> {
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not defined');
  }

  // Return existing connection if available
  if (cached.conn) {
    console.log('[DB] ✅ Using cached MongoDB connection');
    return cached.conn;
  }

  // Create new connection promise if not already in progress
  if (!cached.promise) {
    console.log('[DB] 🔄 Initiating new MongoDB connection...');

    cached.promise = mongoose
      .connect(MONGODB_URI, {
        retryWrites: true,
        w: 'majority',
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      })
      .then((mongoose) => {
        console.log('[DB] ✅ MongoDB connected successfully');
        return mongoose;
      })
      .catch((err) => {
        console.error('[DB] ❌ MongoDB connection failed:', err.message);
        cached.promise = null; // Reset promise on failure
        throw new Error(`Database connection error: ${err.message}`);
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    cached.promise = null;
    throw err;
  }
}

/**
 * Graceful database disconnection
 * Use during server shutdown or testing teardown
 */
export async function disconnectDB(): Promise<void> {
  if (cached.conn) {
    await cached.conn.disconnect();
    cached.conn = null;
    cached.promise = null;
    console.log('[DB] 🔌 Database disconnected');
  }
}

/**
 * Health check function for database connection
 * Returns connection status
 */
export async function checkDBHealth(): Promise<boolean> {
  try {
    const db = await getDB();
    return db.connection.readyState === 1; // 1 = connected
  } catch {
    return false;
  }
}
