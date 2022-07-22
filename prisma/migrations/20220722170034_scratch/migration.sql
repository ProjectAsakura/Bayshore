/*
  Warnings:

  - You are about to drop the column `lastSheet` on the `User` table. All the data in the column will be lost.
  - The primary key for the `UserItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dbId` on the `UserItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "lastPlayedAt" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastSheet",
ADD COLUMN     "lastScratched" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "currentSheet" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "UserItem" DROP CONSTRAINT "UserItem_pkey",
DROP COLUMN "dbId",
ADD COLUMN     "earnedAt" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "type" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "userItemId" SERIAL NOT NULL,
ADD CONSTRAINT "UserItem_pkey" PRIMARY KEY ("userItemId");

-- CreateTable
CREATE TABLE "ScratchSheet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sheetNo" INTEGER NOT NULL,

    CONSTRAINT "ScratchSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScratchSquare" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "category" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "earned" BOOLEAN NOT NULL,

    CONSTRAINT "ScratchSquare_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScratchSheet" ADD CONSTRAINT "ScratchSheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScratchSquare" ADD CONSTRAINT "ScratchSquare_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "ScratchSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
