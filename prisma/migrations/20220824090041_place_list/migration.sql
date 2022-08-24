/*
  Warnings:

  - You are about to drop the column `locked` on the `PlaceList` table. All the data in the column will be lost.
  - You are about to drop the column `recommended` on the `PlaceList` table. All the data in the column will be lost.
  - Added the required column `country` to the `PlaceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shopName` to the `PlaceList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "PlaceList" DROP COLUMN "locked",
DROP COLUMN "recommended",
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "shopName" TEXT NOT NULL;
