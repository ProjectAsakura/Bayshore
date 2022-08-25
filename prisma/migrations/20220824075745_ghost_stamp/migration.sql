-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "stampSheet" INTEGER[],
ADD COLUMN     "stampSheetCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "vsStarCountMax" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "CarChallenger" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "challengerCarId" INTEGER NOT NULL,
    "stamp" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,

    CONSTRAINT "CarChallenger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarStampTarget" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "stampTargetCarId" INTEGER NOT NULL,
    "returnCount" INTEGER NOT NULL,
    "locked" BOOLEAN NOT NULL,
    "recommended" BOOLEAN NOT NULL,

    CONSTRAINT "CarStampTarget_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CarChallenger" ADD CONSTRAINT "CarChallenger_challengerCarId_fkey" FOREIGN KEY ("challengerCarId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarStampTarget" ADD CONSTRAINT "CarStampTarget_stampTargetCarId_fkey" FOREIGN KEY ("stampTargetCarId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;
