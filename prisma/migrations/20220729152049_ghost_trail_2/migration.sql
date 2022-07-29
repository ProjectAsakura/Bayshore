/*
  Warnings:

  - Added the required column `crownBattle` to the `GhostTrail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "GhostTrail" ADD COLUMN     "crownBattle" BOOLEAN NOT NULL;
