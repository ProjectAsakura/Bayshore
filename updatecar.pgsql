UPDATE "Car" SET 
odometer = 999000000, 
"earnedCustomColor" = TRUE, 
"vsStarCount" = 204165, 
"vsCoolOrWild" = 3, 
"vsSmoothOrRough" = 5, 
"vsTripleStarMedals" = 33333, 
"vsDoubleStarMedals" = 20000, 
"vsSingleStarMedals" = 64166, 
"vsPlainMedals" = 40001,
"dressupLevel" = 67,
"aura" = 30,
"auraMotif" = 30,
"vsPlayCount" = 394998,
"rgPlayCount" = 100000,
"rgWinCount" = 100000,
"rgTrophy" = 267900,
"rgStamp" = 0,
"rgScore" = 100000,
"stPlayCount" = 1920,
"stClearCount" = 2000,
"stConsecutiveWins" = 2000,
"stConsecutiveWinsMax" = 2000,
"stCompleted100Episodes" = TRUE,
"stampSheetCount" = 833,
"vsStarCountMax" = 204165,
"country" = 'SGP',
"regionId" = 50
WHERE "carId" = 1;

UPDATE "CarSettings"
SET
"retire" = TRUE,
"meter" = 10,
"bgm" = 7
WHERE "dbId" = 1;
INSERT INTO "CarItem"
VALUES
(1, 1, 1, 1, 1);