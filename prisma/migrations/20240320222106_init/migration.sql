-- CreateTable
CREATE TABLE "Truck" (
    "id" TEXT NOT NULL,
    "truckBooleanValuesId" TEXT,
    "truckStringValuesId" TEXT,

    CONSTRAINT "Truck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TruckBooleanValues" (
    "id" TEXT NOT NULL,
    "clrv" BOOLEAN NOT NULL,
    "cvv" BOOLEAN NOT NULL,
    "antt" BOOLEAN NOT NULL,
    "furos" BOOLEAN NOT NULL,
    "vedacao" BOOLEAN NOT NULL,
    "borrachasPortas" BOOLEAN NOT NULL,
    "aparelhoFrio" BOOLEAN NOT NULL,
    "ganchos" BOOLEAN NOT NULL,
    "limpezaQuantidades" BOOLEAN NOT NULL,
    "farois" BOOLEAN NOT NULL,
    "lanternas" BOOLEAN NOT NULL,
    "luzInternaBau" BOOLEAN NOT NULL,
    "truckId" TEXT,

    CONSTRAINT "TruckBooleanValues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TruckStringValues" (
    "id" TEXT NOT NULL,
    "clrv" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,
    "antt" TEXT NOT NULL,
    "furos" TEXT NOT NULL,
    "vedacao" TEXT NOT NULL,
    "borrachasPortas" TEXT NOT NULL,
    "aparelhoFrio" TEXT NOT NULL,
    "ganchos" TEXT NOT NULL,
    "limpezaQuantidades" TEXT NOT NULL,
    "farois" TEXT NOT NULL,
    "lanternas" TEXT NOT NULL,
    "luzInternaBau" TEXT NOT NULL,
    "truckId" TEXT,

    CONSTRAINT "TruckStringValues_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TruckBooleanValues_truckId_key" ON "TruckBooleanValues"("truckId");

-- CreateIndex
CREATE UNIQUE INDEX "TruckStringValues_truckId_key" ON "TruckStringValues"("truckId");

-- AddForeignKey
ALTER TABLE "TruckBooleanValues" ADD CONSTRAINT "TruckBooleanValues_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "Truck"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TruckStringValues" ADD CONSTRAINT "TruckStringValues_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "Truck"("id") ON DELETE SET NULL ON UPDATE CASCADE;
