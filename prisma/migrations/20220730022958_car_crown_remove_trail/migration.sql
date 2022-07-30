/*
  Warnings:

  - You are about to drop the column `trail` on the `CarCrown` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarCrown" DROP COLUMN "trail";
