-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "CarPathandTuning" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "area" INTEGER NOT NULL DEFAULT 0,
    "ramp" INTEGER NOT NULL DEFAULT 0,
    "path" INTEGER NOT NULL DEFAULT 0,
    "tunePower" INTEGER NOT NULL DEFAULT 17,
    "tuneHandling" INTEGER NOT NULL DEFAULT 17,

    CONSTRAINT "CarPathandTuning_pkey" PRIMARY KEY ("dbId")
);

-- AddForeignKey
ALTER TABLE "CarPathandTuning" ADD CONSTRAINT "CarPathandTuning_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;
