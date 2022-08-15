/*
  Warnings:

  - You are about to drop the column `ocmBattle` on the `GhostBattleRecord` table. All the data in the column will be lost.
  - You are about to drop the column `ocmMainDay` on the `GhostBattleRecord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "GhostBattleRecord" DROP COLUMN "ocmBattle",
DROP COLUMN "ocmMainDay";
