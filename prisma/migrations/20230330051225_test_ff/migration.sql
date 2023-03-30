-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "FileList" ALTER COLUMN "filePath" DROP DEFAULT;

-- CreateTable
CREATE TABLE "CarCrownDetect" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT '',
    "area" INTEGER,
    "ramp" INTEGER,
    "path" INTEGER,
    "trail" BYTEA,
    "playedAt" INTEGER,
    "tunePower" INTEGER,
    "tuneHandling" INTEGER,

    CONSTRAINT "CarCrownDetect_pkey" PRIMARY KEY ("id")
);
