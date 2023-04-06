-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarCrownDetect" ADD COLUMN     "opponentCarId" INTEGER;
