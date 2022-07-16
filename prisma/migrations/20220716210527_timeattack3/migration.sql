/*
  Warnings:

  - You are about to drop the column `userId` on the `TimeAttackRecord` table. All the data in the column will be lost.
  - Added the required column `carId` to the `TimeAttackRecord` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TimeAttackRecord" DROP CONSTRAINT "TimeAttackRecord_userId_fkey";

-- AlterTable
ALTER TABLE "TimeAttackRecord" DROP COLUMN "userId",
ADD COLUMN     "carId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TimeAttackRecord" ADD CONSTRAINT "TimeAttackRecord_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;
