-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "CarGTWing" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "pillar" INTEGER NOT NULL DEFAULT 0,
    "pillarMaterial" INTEGER NOT NULL DEFAULT 0,
    "mainWing" INTEGER NOT NULL DEFAULT 0,
    "mainWingColor" INTEGER NOT NULL DEFAULT 0,
    "wingTip" INTEGER NOT NULL DEFAULT 0,
    "material" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CarGTWing_pkey" PRIMARY KEY ("dbId")
);

-- CreateIndex
CREATE UNIQUE INDEX "CarGTWing_carId_key" ON "CarGTWing"("carId");

-- AddForeignKey
ALTER TABLE "CarGTWing" ADD CONSTRAINT "CarGTWing_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;
