-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "TimeAttackRecord" ADD COLUMN     "tuneHandling" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "tunePower" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bookmarks" INTEGER[],
ADD COLUMN     "carOrder" INTEGER[],
ADD COLUMN     "currentSheet" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lastSheet" INTEGER NOT NULL DEFAULT 0;
