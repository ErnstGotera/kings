-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `price` FLOAT NOT NULL,
    `description` VARCHAR(80) NOT NULL,
    `category` VARCHAR(20) NOT NULL,
    `subcategory` VARCHAR(20) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
