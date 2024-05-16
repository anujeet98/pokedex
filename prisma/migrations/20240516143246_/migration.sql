-- CreateTable
CREATE TABLE "pokemons" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(45) NOT NULL,
    "sprite" VARCHAR(500) NOT NULL,
    "type1" VARCHAR(45) NOT NULL,
    "type2" VARCHAR(45) NOT NULL,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "name_UNIQUE" ON "pokemons"("name");
