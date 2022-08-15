-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarState" ADD COLUMN     "competitionState" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "GhostBattleRecord" ADD COLUMN     "ocmBattle" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "ocmMainDay" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "GhostTrail" ADD COLUMN     "ocmBattle" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "ocmMainDay" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "OCMEvent" (
    "dbId" SERIAL NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "qualifyingPeriodStartAt" INTEGER NOT NULL,
    "qualifyingPeriodCloseAt" INTEGER NOT NULL,
    "competitionStartAt" INTEGER NOT NULL,
    "competitionCloseAt" INTEGER NOT NULL,
    "competitionEndAt" INTEGER NOT NULL,
    "lengthOfPeriod" INTEGER NOT NULL,
    "lengthOfInterval" INTEGER NOT NULL,
    "area" INTEGER NOT NULL DEFAULT 0,
    "minigamePatternId" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "OCMEvent_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "OCMPlayRecord" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "brakingPoint" INTEGER,
    "playedAt" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "OCMPlayRecord_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "OCMTop1Ghost" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "OCMTop1Ghost_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "OCMTally" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "OCMTally_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "OCMGhostBattleRecord" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,
    "area" INTEGER NOT NULL DEFAULT 0,
    "playedAt" INTEGER NOT NULL DEFAULT 0,
    "playedShopName" TEXT NOT NULL DEFAULT 'Bayshore',
    "ocmMainDraw" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "OCMGhostBattleRecord_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "OCMGhostTrail" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "ramp" INTEGER NOT NULL,
    "path" INTEGER NOT NULL,
    "trail" BYTEA NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "playedAt" INTEGER NOT NULL DEFAULT 0,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,
    "ocmBattle" BOOLEAN NOT NULL DEFAULT false,
    "ocmMainDraw" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "OCMGhostTrail_pkey" PRIMARY KEY ("dbId")
);

-- AddForeignKey
ALTER TABLE "OCMPlayRecord" ADD CONSTRAINT "OCMPlayRecord_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OCMTop1Ghost" ADD CONSTRAINT "OCMTop1Ghost_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OCMTally" ADD CONSTRAINT "OCMTally_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OCMGhostBattleRecord" ADD CONSTRAINT "OCMGhostBattleRecord_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OCMGhostTrail" ADD CONSTRAINT "OCMGhostTrail_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;
