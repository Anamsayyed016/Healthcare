-- AlterTable
-- Keep existing enquiries table. Add admin CMS tables only.

CREATE TABLE IF NOT EXISTS "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'Admin',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "users_email_key" ON "users"("email");

CREATE TABLE IF NOT EXISTS "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "categories_slug_key" ON "categories"("slug");

CREATE TABLE IF NOT EXISTS "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brandName" TEXT,
    "slug" TEXT NOT NULL,
    "categoryId" TEXT,
    "categoryName" TEXT NOT NULL,
    "categoryBadge" TEXT,
    "icon" TEXT NOT NULL DEFAULT 'pill',
    "shortDescription" TEXT NOT NULL,
    "longDescription" TEXT,
    "composition" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "benefits" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "indications" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "suitableFor" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "cardHighlights" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "packSize" TEXT,
    "dosage" TEXT,
    "storage" TEXT,
    "prescriptionType" TEXT,
    "manufacturing" TEXT,
    "qualityStandards" TEXT,
    "relatedSlugs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "mainImage" TEXT,
    "gallery" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "brochure" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'Draft',
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "metaKeywords" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "products_slug_key" ON "products"("slug");

CREATE TABLE IF NOT EXISTS "site_settings" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "logoUrl" TEXT,
    "faviconUrl" TEXT,
    "addressLine1" TEXT,
    "addressLine2" TEXT,
    "addressLine3" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "whatsappNumber" TEXT,
    "mapEmbedUrl" TEXT,
    "mapLinkUrl" TEXT,
    "facebookUrl" TEXT,
    "linkedinUrl" TEXT,
    "instagramUrl" TEXT,
    "twitterUrl" TEXT,
    "footerText" TEXT,
    "businessHoursDays" TEXT,
    "businessHoursTime" TEXT,
    "websiteUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "site_settings_pkey" PRIMARY KEY ("id")
);

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'products_categoryId_fkey'
  ) THEN
    ALTER TABLE "products"
      ADD CONSTRAINT "products_categoryId_fkey"
      FOREIGN KEY ("categoryId") REFERENCES "categories"("id")
      ON DELETE SET NULL ON UPDATE CASCADE;
  END IF;
END $$;
