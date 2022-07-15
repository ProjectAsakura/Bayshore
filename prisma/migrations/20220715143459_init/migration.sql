-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "chipId" TEXT NOT NULL,
    "accessCode" TEXT NOT NULL,
    "tutorials" BOOLEAN[],
    "userBanned" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserItem" (
    "dbId" SERIAL NOT NULL,
    "category" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserItem_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "Car" (
    "userId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "manufacturer" INTEGER NOT NULL,
    "model" INTEGER NOT NULL,
    "visualModel" INTEGER NOT NULL,
    "customColor" INTEGER NOT NULL DEFAULT 0,
    "defaultColor" INTEGER NOT NULL,
    "wheel" INTEGER NOT NULL DEFAULT 0,
    "wheelColor" INTEGER NOT NULL DEFAULT 0,
    "aero" INTEGER NOT NULL DEFAULT 0,
    "bonnet" INTEGER NOT NULL DEFAULT 0,
    "wing" INTEGER NOT NULL DEFAULT 0,
    "mirror" INTEGER NOT NULL DEFAULT 0,
    "neon" INTEGER NOT NULL DEFAULT 0,
    "trunk" INTEGER NOT NULL DEFAULT 0,
    "plate" INTEGER NOT NULL DEFAULT 0,
    "plateColor" INTEGER NOT NULL DEFAULT 0,
    "plateNumber" INTEGER NOT NULL DEFAULT 0,
    "tunePower" INTEGER NOT NULL DEFAULT 0,
    "tuneHandling" INTEGER NOT NULL DEFAULT 0,
    "title" TEXT NOT NULL DEFAULT 'New Car',
    "level" INTEGER NOT NULL DEFAULT 0,
    "windowSticker" BOOLEAN NOT NULL DEFAULT false,
    "windowStickerString" TEXT NOT NULL DEFAULT 'ＷＡＮＧＡＮ',
    "windowStickerFont" INTEGER NOT NULL DEFAULT 0,
    "rivalMarker" INTEGER NOT NULL DEFAULT 0,
    "aura" INTEGER NOT NULL DEFAULT 0,
    "auraMotif" INTEGER NOT NULL DEFAULT 0,
    "ghostLevel" INTEGER NOT NULL DEFAULT 1,
    "searchCode" TEXT NOT NULL DEFAULT '000000',
    "tuningPoints" INTEGER NOT NULL DEFAULT 0,
    "odometer" INTEGER NOT NULL DEFAULT 0,
    "playCount" INTEGER NOT NULL DEFAULT 0,
    "earnedCustomColor" BOOLEAN NOT NULL DEFAULT false,
    "carSettingsDbId" INTEGER NOT NULL,
    "vsPlayCount" INTEGER NOT NULL DEFAULT 0,
    "vsBurstCount" INTEGER NOT NULL DEFAULT 0,
    "vsStarCount" INTEGER NOT NULL DEFAULT 0,
    "vsCoolOrWild" INTEGER NOT NULL DEFAULT 0,
    "vsSmoothOrRough" INTEGER NOT NULL DEFAULT 0,
    "vsTripleStarMedals" INTEGER NOT NULL DEFAULT 0,
    "vsDoubleStarMedals" INTEGER NOT NULL DEFAULT 0,
    "vsSingleStarMedals" INTEGER NOT NULL DEFAULT 0,
    "vsPlainMedals" INTEGER NOT NULL DEFAULT 0,
    "ghostPlayCount" INTEGER NOT NULL DEFAULT 0,
    "ghostWinCount" INTEGER NOT NULL DEFAULT 0,
    "ghostTrophy" INTEGER NOT NULL DEFAULT 0,
    "ghostScore" INTEGER NOT NULL DEFAULT 0,
    "ghostStamp" INTEGER NOT NULL DEFAULT 0,
    "ghostAcquireAllCrowns" BOOLEAN NOT NULL DEFAULT false,
    "dressupLevel" INTEGER NOT NULL DEFAULT 0,
    "dressupPoint" INTEGER NOT NULL DEFAULT 0,
    "stPlayCount" INTEGER NOT NULL DEFAULT 0,
    "stClearBits" INTEGER NOT NULL DEFAULT 0,
    "stClearDivCount" INTEGER NOT NULL DEFAULT 0,
    "stClearCount" INTEGER NOT NULL DEFAULT 0,
    "stLoseBits" INTEGER NOT NULL DEFAULT 0,
    "stConsecutiveWins" INTEGER NOT NULL DEFAULT 0,
    "stConsecutiveWinsMax" INTEGER NOT NULL DEFAULT 0,
    "stCompleted100Episodes" BOOLEAN NOT NULL DEFAULT false,
    "carStateDbId" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarItem" (
    "carId" INTEGER NOT NULL,
    "category" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "CarSettings" (
    "dbId" SERIAL NOT NULL,
    "view" BOOLEAN NOT NULL DEFAULT true,
    "transmission" BOOLEAN NOT NULL DEFAULT false,
    "retire" BOOLEAN NOT NULL DEFAULT false,
    "meter" INTEGER NOT NULL DEFAULT 0,
    "navigationMap" BOOLEAN NOT NULL DEFAULT true,
    "volume" INTEGER NOT NULL DEFAULT 1,
    "bgm" INTEGER NOT NULL DEFAULT 0,
    "nameplate" INTEGER NOT NULL DEFAULT 0,
    "nameplateColor" INTEGER NOT NULL DEFAULT 0,
    "terminalBackground" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CarSettings_pkey" PRIMARY KEY ("dbId")
);

-- CreateTable
CREATE TABLE "CarState" (
    "dbId" SERIAL NOT NULL,
    "hasOpponentGhost" BOOLEAN NOT NULL DEFAULT true,
    "eventJoined" BOOLEAN NOT NULL DEFAULT false,
    "transferred" BOOLEAN NOT NULL DEFAULT false,
    "toBeDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CarState_pkey" PRIMARY KEY ("dbId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_chipId_key" ON "User"("chipId");

-- CreateIndex
CREATE UNIQUE INDEX "Car_carSettingsDbId_key" ON "Car"("carSettingsDbId");

-- CreateIndex
CREATE UNIQUE INDEX "Car_carStateDbId_key" ON "Car"("carStateDbId");

-- CreateIndex
CREATE UNIQUE INDEX "CarItem_carId_key" ON "CarItem"("carId");

-- AddForeignKey
ALTER TABLE "UserItem" ADD CONSTRAINT "UserItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carSettingsDbId_fkey" FOREIGN KEY ("carSettingsDbId") REFERENCES "CarSettings"("dbId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_carStateDbId_fkey" FOREIGN KEY ("carStateDbId") REFERENCES "CarState"("dbId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarItem" ADD CONSTRAINT "CarItem_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
