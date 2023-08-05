/*
  Warnings:

  - You are about to drop the `CarCrownDetect` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- DropTable
DROP TABLE "CarCrownDetect";
