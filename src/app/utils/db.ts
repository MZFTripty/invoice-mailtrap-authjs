// lib/prisma.ts

import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const connectionString = `${process.env.DATABASE_URL}`;

// In Prisma 7, you must pass the adapter to the PrismaClient constructor
const adapter = new PrismaPg({ connectionString });

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Always create PrismaClient with adapter in Prisma 7
export const prisma =
  globalForPrisma.prisma ||
  (() => {
    const client = new PrismaClient({
      adapter, // This is required in Prisma 7
    });
    if (process.env.NODE_ENV !== 'production') {
      globalForPrisma.prisma = client;
    }
    return client;
  })();
