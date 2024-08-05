/*
  Warnings:

  - Added the required column `licensePlate` to the `Truck` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Truck" ADD COLUMN     "licensePlate" TEXT NOT NULL;
