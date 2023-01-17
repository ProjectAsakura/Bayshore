-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "stLoseBits" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "FileList" ADD COLUMN     "filePath" TEXT NOT NULL DEFAULT '';
