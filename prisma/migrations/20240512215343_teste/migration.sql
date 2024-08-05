/*
  Warnings:

  - You are about to drop the column `truckVerificationId` on the `Truck` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Truck" DROP CONSTRAINT "Truck_truckVerificationId_fkey";

-- AlterTable
ALTER TABLE "Truck" DROP COLUMN "truckVerificationId";

-- AlterTable
ALTER TABLE "truckVerification" ADD COLUMN     "truckVerificationId" TEXT;

-- AddForeignKey
ALTER TABLE "truckVerification" ADD CONSTRAINT "truckVerification_truckVerificationId_fkey" FOREIGN KEY ("truckVerificationId") REFERENCES "Truck"("id") ON DELETE SET NULL ON UPDATE CASCADE;
