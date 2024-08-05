/*
  Warnings:

  - Added the required column `pneusIluminacao` to the `TruckBooleanValues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TruckBooleanValues" ADD COLUMN     "pneusIluminacao" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "TruckStringValues" ADD COLUMN     "pneusIluminacao" TEXT;
