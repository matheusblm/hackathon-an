-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `education` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL DEFAULT 0,
    `level` VARCHAR(191) NOT NULL DEFAULT 'Historiador Iniciante',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `description` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `isReviewed` BOOLEAN NOT NULL DEFAULT false,
    `points` INTEGER NOT NULL DEFAULT 2,
    `fileId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReviewAudit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accept` BOOLEAN NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `reviewId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `points` INTEGER NOT NULL DEFAULT 5,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `File` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `reviewId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `reviewId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_fileId_fkey` FOREIGN KEY (`fileId`) REFERENCES `File`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReviewAudit` ADD CONSTRAINT `ReviewAudit_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReviewAudit` ADD CONSTRAINT `ReviewAudit_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `Review`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tag` ADD CONSTRAINT `Tag_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `Review`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_reviewId_fkey` FOREIGN KEY (`reviewId`) REFERENCES `Review`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
