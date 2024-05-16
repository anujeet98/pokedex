-- CreateTable
CREATE TABLE `pokemons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `sprite` VARCHAR(500) NOT NULL,
    `type1` VARCHAR(45) NOT NULL,
    `type2` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `name_UNIQUE`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
