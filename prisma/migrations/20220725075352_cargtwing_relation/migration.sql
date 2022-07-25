/*
  Warnings:

  - You are about to drop the column `carId` on the `CarGTWing` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[carGTWingDbId]` on the table `Car` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carGTWingDbId` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CarGTWing" DROP CONSTRAINT "CarGTWing_carId_fkey";

-- DropIndex
DROP INDEX "CarGTWing_carId_key";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "carGTWingDbId" INTEGER NOT NULL,
ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarGTWing" DROP COLUMN "carId";

-- CreateIndex
CREATE UNIQUE INDEX "Car_carGTWingDbId_key" ON "Car"("carGTWingDbId");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carGTWingDbId_fkey" FOREIGN KEY ("carGTWingDbId") REFERENCES "CarGTWing"("dbId") ON DELETE RESTRICT ON UPDATE CASCADE;
