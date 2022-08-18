-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "GhostRegisteredFromTerminal" (
    "dbId" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "competitionId" INTEGER,
    "opponentCarId" INTEGER NOT NULL,

    CONSTRAINT "GhostRegisteredFromTerminal_pkey" PRIMARY KEY ("dbId")
);

-- AddForeignKey
ALTER TABLE "GhostRegisteredFromTerminal" ADD CONSTRAINT "GhostRegisteredFromTerminal_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("carId") ON DELETE RESTRICT ON UPDATE CASCADE;
