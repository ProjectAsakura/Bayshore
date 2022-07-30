/*
  Warnings:

  - You are about to drop the column `tuneHandling` on the `GhostTrail` table. All the data in the column will be lost.
  - You are about to drop the column `tunePower` on the `GhostTrail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "GhostTrail" DROP COLUMN "tuneHandling",
DROP COLUMN "tunePower";
