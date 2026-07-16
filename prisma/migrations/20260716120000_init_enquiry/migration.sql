-- CreateTable
-- Replaces the temporary hand-created enquiries table with the Prisma Enquiry model.
-- PharmEFC database only — does not touch Naukrimili.

DROP TABLE IF EXISTS "enquiries" CASCADE;
DROP SEQUENCE IF EXISTS "enquiries_id_seq";

CREATE TABLE "enquiries" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "company" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'New',
    "source" TEXT NOT NULL DEFAULT 'Website',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "enquiries_pkey" PRIMARY KEY ("id")
);
