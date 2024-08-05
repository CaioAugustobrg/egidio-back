/*
  Warnings:

  - You are about to drop the column `truckId` on the `truckVerification` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "truckVerification" DROP CONSTRAINT "truckVerification_truckId_fkey";

-- DropIndex
DROP INDEX "truckVerification_truckId_key";

-- AlterTable
ALTER TABLE "Truck" ALTER COLUMN "licensePlate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "truckVerification" DROP COLUMN "truckId";

-- CreateTable
CREATE TABLE "_TruckTotruckVerification" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TruckTotruckVerification_AB_unique" ON "_TruckTotruckVerification"("A", "B");

-- CreateIndex
CREATE INDEX "_TruckTotruckVerification_B_index" ON "_TruckTotruckVerification"("B");

-- AddForeignKey
ALTER TABLE "_TruckTotruckVerification" ADD CONSTRAINT "_TruckTotruckVerification_A_fkey" FOREIGN KEY ("A") REFERENCES "Truck"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TruckTotruckVerification" ADD CONSTRAINT "_TruckTotruckVerification_B_fkey" FOREIGN KEY ("B") REFERENCES "truckVerification"("id") ON DELETE CASCADE ON UPDATE CASCADE;
