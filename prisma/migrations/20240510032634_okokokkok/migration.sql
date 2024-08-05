/*
  Warnings:

  - You are about to drop the column `licensePlateid` on the `Truck` table. All the data in the column will be lost.
  - You are about to drop the column `truckBooleanValuesId` on the `Truck` table. All the data in the column will be lost.
  - You are about to drop the column `truckStringValuesId` on the `Truck` table. All the data in the column will be lost.
  - You are about to drop the `licensePlate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TruckBooleanValues" DROP CONSTRAINT "TruckBooleanValues_truckId_fkey";

-- DropForeignKey
ALTER TABLE "TruckStringValues" DROP CONSTRAINT "TruckStringValues_truckId_fkey";

-- DropForeignKey
ALTER TABLE "licensePlate" DROP CONSTRAINT "licensePlate_truckId_fkey";

-- AlterTable
ALTER TABLE "Truck" DROP COLUMN "licensePlateid",
DROP COLUMN "truckBooleanValuesId",
DROP COLUMN "truckStringValuesId",
ADD COLUMN     "licensePlate" TEXT;

-- DropTable
DROP TABLE "licensePlate";

-- CreateTable
CREATE TABLE "truckVerification" (
    "id" TEXT NOT NULL,
    "truckId" TEXT,
    "truckBooleanValuesId" TEXT,
    "truckStringValuesId" TEXT,

    CONSTRAINT "truckVerification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "truckVerification_truckId_key" ON "truckVerification"("truckId");

-- AddForeignKey
ALTER TABLE "truckVerification" ADD CONSTRAINT "truckVerification_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "Truck"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TruckBooleanValues" ADD CONSTRAINT "TruckBooleanValues_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "truckVerification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TruckStringValues" ADD CONSTRAINT "TruckStringValues_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "truckVerification"("id") ON DELETE SET NULL ON UPDATE CASCADE;
