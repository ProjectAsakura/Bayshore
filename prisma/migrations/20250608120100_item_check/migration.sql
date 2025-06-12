/*
  Warnings:

  - You are about to drop the column `type` on the `UserItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CarItem" ADD COLUMN     "earnedAt" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "UserItem" DROP COLUMN "type";
