-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarCrown" ALTER COLUMN "trail" DROP DEFAULT;

-- CreateTable
CREATE TABLE "GhostTrail" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "ramp" INTEGER NOT NULL,
    "path" INTEGER NOT NULL,
    "trail" BYTEA NOT NULL,
    "time" INTEGER,
    "driveData" BYTEA,
    "trendBinaryByArea" BYTEA,
    "tunePower" INTEGER NOT NULL,
    "tuneHandling" INTEGER NOT NULL,
    "playedAt" INTEGER NOT NULL,

    CONSTRAINT "GhostTrail_pkey" PRIMARY KEY ("dbId")
);

-- AddForeignKey
ALTER TABLE "GhostTrail" ADD CONSTRAINT "GhostTrail_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;
