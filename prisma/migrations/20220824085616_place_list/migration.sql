-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "lastPlayedPlaceId" INTEGER,
ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "PlaceList" (
    "id" SERIAL NOT NULL,
    "placeId" TEXT NOT NULL,
    "regionId" INTEGER NOT NULL,
    "locked" BOOLEAN NOT NULL,
    "recommended" BOOLEAN NOT NULL,

    CONSTRAINT "PlaceList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_lastPlayedPlaceId_fkey" FOREIGN KEY ("lastPlayedPlaceId") REFERENCES "PlaceList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
