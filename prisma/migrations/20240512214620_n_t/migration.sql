/*
  Warnings:

  - You are about to drop the `_TruckTotruckVerification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TruckTotruckVerification" DROP CONSTRAINT "_TruckTotruckVerification_A_fkey";

-- DropForeignKey
ALTER TABLE "_TruckTotruckVerification" DROP CONSTRAINT "_TruckTotruckVerification_B_fkey";

-- AlterTable
ALTER TABLE "Truck" ADD COLUMN     "truckId" TEXT;

-- DropTable
DROP TABLE "_TruckTotruckVerification";

-- AddForeignKey
ALTER TABLE "Truck" ADD CONSTRAINT "Truck_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "truckVerification"("id") ON DELETE SET NULL ON UPDATE CASCADE;
