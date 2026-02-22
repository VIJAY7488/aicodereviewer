import { PrismaClient } from "@prisma/client";


// Function to create a new PrismaClient instance
// Wrapping it in a function helps control how and when it is created
const createPrismaClient = () => {
  return new PrismaClient();
};


// Extend the globalThis object to include a 'prisma' property
// TypeScript does not know that globalThis.prisma exists,
// so we cast globalThis to a custom type
const globalPrismaClient = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};


// Create a single Prisma instance
// If a global Prisma instance already exists, reuse it
// Otherwise, create a new one
export const db = globalPrismaClient.prisma ?? createPrismaClient();


// In development mode only:
// Save the Prisma instance to globalThis
// This prevents multiple Prisma instances during hot reload (Next.js dev mode)
// Without this, you may get "Too many database connections" error
if (process.env.NODE_ENV !== "production") {
  globalPrismaClient.prisma = db;
}