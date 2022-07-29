-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "CarCrown" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "ramp" INTEGER NOT NULL,
    "path" INTEGER NOT NULL,
    "trail" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "CarCrown_pkey" PRIMARY KEY ("dbId")
);

-- AddForeignKey
ALTER TABLE "CarCrown" ADD CONSTRAINT "CarCrown_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;
