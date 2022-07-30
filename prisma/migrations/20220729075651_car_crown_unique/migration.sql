/*
  Warnings:

  - A unique constraint covering the columns `[area]` on the table `CarCrown` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarCrown" ALTER COLUMN "trail" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "CarCrown_area_key" ON "CarCrown"("area");
