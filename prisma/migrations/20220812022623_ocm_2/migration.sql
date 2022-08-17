-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "OCMPeriod" (
    "dbId" SERIAL NOT NULL,
    "competitionDbId" INTEGER NOT NULL,
    "competitionId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,
    "startAt" INTEGER NOT NULL,
    "closeAt" INTEGER NOT NULL,

    CONSTRAINT "OCMPeriod_pkey" PRIMARY KEY ("dbId")
);

-- AddForeignKey
ALTER TABLE "OCMPeriod" ADD CONSTRAINT "OCMPeriod_competitionDbId_fkey" FOREIGN KEY ("competitionDbId") REFERENCES "OCMEvent"("dbId") ON DELETE RESTRICT ON UPDATE CASCADE;
