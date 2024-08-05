/*
  Warnings:

  - You are about to drop the column `truckId` on the `Truck` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Truck" DROP CONSTRAINT "Truck_truckId_fkey";

-- AlterTable
ALTER TABLE "Truck" DROP COLUMN "truckId",
ADD COLUMN     "truckVerificationId" TEXT;

-- AddForeignKey
ALTER TABLE "Truck" ADD CONSTRAINT "Truck_truckVerificationId_fkey" FOREIGN KEY ("truckVerificationId") REFERENCES "truckVerification"("id") ON DELETE SET NULL ON UPDATE CASCADE;
