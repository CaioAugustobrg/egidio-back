/*
  Warnings:

  - You are about to drop the column `licensePlate` on the `Truck` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Truck_licensePlate_key";

-- AlterTable
ALTER TABLE "Truck" DROP COLUMN "licensePlate",
ADD COLUMN     "licensePlateid" TEXT;

-- CreateTable
CREATE TABLE "licensePlate" (
    "id" TEXT NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "truckId" TEXT,

    CONSTRAINT "licensePlate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "licensePlate_licensePlate_key" ON "licensePlate"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "licensePlate_truckId_key" ON "licensePlate"("truckId");

-- AddForeignKey
ALTER TABLE "licensePlate" ADD CONSTRAINT "licensePlate_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "Truck"("id") ON DELETE SET NULL ON UPDATE CASCADE;
