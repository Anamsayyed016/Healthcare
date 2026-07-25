-- Add status to users; normalize role default for CMS admins.
ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "status" TEXT NOT NULL DEFAULT 'ACTIVE';
