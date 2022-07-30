/*
  Warnings:

  - Added the required column `tuneHandling` to the `CarCrown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tunePower` to the `CarCrown` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarCrown" ADD COLUMN     "tuneHandling" INTEGER NOT NULL,
ADD COLUMN     "tunePower" INTEGER NOT NULL,
ALTER COLUMN "trail" SET DEFAULT 0;
