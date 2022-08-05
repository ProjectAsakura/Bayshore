-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "GhostBattleRecord" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,
    "opponent1CarId" INTEGER NOT NULL,
    "opponent1Result" INTEGER NOT NULL,
    "opponent1TunePower" INTEGER NOT NULL,
    "opponent1TuneHandling" INTEGER NOT NULL,
    "opponent2CarId" INTEGER,
    "opponent2Result" INTEGER,
    "opponent2TunePower" INTEGER,
    "opponent2TuneHandling" INTEGER,
    "opponent3CarId" INTEGER,
    "opponent3Result" INTEGER,
    "opponent3TunePower" INTEGER,
    "opponent3TuneHandling" INTEGER,
    "area" INTEGER NOT NULL DEFAULT 0,
    "playedAt" INTEGER NOT NULL DEFAULT 0,
    "playedShopName" TEXT NOT NULL DEFAULT 'Bayshore',

    CONSTRAINT "GhostBattleRecord_pkey" PRIMARY KEY ("dbId")
);

-- AddForeignKey
ALTER TABLE "GhostBattleRecord" ADD CONSTRAINT "GhostBattleRecord_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;
