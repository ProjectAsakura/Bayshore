/*
  Warnings:

  - Changed the type of `trail` on the `CarCrown` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `driveData` to the `GhostTrail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playedAt` to the `GhostTrail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `GhostTrail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trendBinaryByArea` to the `GhostTrail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tuneHandling` to the `GhostTrail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tunePower` to the `GhostTrail` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `trail` on the `GhostTrail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "CarCrown" DROP COLUMN "trail",
ADD COLUMN     "trail" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "GhostTrail" ADD COLUMN     "driveData" BYTEA NOT NULL,
ADD COLUMN     "playedAt" INTEGER NOT NULL,
ADD COLUMN     "time" INTEGER NOT NULL,
ADD COLUMN     "trendBinaryByArea" BYTEA NOT NULL,
ADD COLUMN     "tuneHandling" INTEGER NOT NULL,
ADD COLUMN     "tunePower" INTEGER NOT NULL,
DROP COLUMN "trail",
ADD COLUMN     "trail" BIGINT NOT NULL;
