-- CreateTable
CREATE TABLE "TimeAttackRecord" (
    "dbId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "model" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "course" INTEGER NOT NULL,
    "section1Time" INTEGER NOT NULL,
    "section2Time" INTEGER NOT NULL,
    "section3Time" INTEGER NOT NULL,
    "section4Time" INTEGER NOT NULL,
    "section5Time" INTEGER,
    "section6Time" INTEGER,
    "section7Time" INTEGER,

    CONSTRAINT "TimeAttackRecord_pkey" PRIMARY KEY ("dbId")
);

-- AddForeignKey
ALTER TABLE "TimeAttackRecord" ADD CONSTRAINT "TimeAttackRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
