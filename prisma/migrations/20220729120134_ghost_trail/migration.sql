/*
  Warnings:

  - The `trail` column on the `CarCrown` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarCrown" DROP COLUMN "trail",
ADD COLUMN     "trail" BIGINT[];

-- CreateTable
CREATE TABLE "GhostTrail" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "ramp" INTEGER NOT NULL,
    "path" INTEGER NOT NULL,
    "trail" BIGINT[],

    CONSTRAINT "GhostTrail_pkey" PRIMARY KEY ("dbId")
);

-- AddForeignKey
ALTER TABLE "GhostTrail" ADD CONSTRAINT "GhostTrail_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;
