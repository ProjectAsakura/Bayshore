-- DropIndex
DROP INDEX "CarItem_carId_key";

-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarItem" ADD COLUMN     "dbId" SERIAL NOT NULL,
ADD CONSTRAINT "CarItem_pkey" PRIMARY KEY ("dbId");
