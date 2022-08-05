-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "GhostTrail" ADD COLUMN     "byAreaMergeSerial" INTEGER,
ADD COLUMN     "byCarMergeSerial" INTEGER,
ADD COLUMN     "byUserMergeSerial" INTEGER,
ADD COLUMN     "trendBinaryByCar" BYTEA,
ADD COLUMN     "trendBinaryByUser" BYTEA;
