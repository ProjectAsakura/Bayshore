-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarChallenger" ADD COLUMN     "lastPlayedAt" INTEGER NOT NULL DEFAULT 0;
