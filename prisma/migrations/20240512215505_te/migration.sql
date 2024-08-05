/*
  Warnings:

  - You are about to drop the column `truckVerificationId` on the `truckVerification` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "truckVerification" DROP CONSTRAINT "truckVerification_truckVerificationId_fkey";

-- AlterTable
ALTER TABLE "truckVerification" DROP COLUMN "truckVerificationId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "truckId" TEXT,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "truckVerification" ADD CONSTRAINT "truckVerification_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "Truck"("id") ON DELETE SET NULL ON UPDATE CASCADE;
