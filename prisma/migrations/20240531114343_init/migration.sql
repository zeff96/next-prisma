/*
  Warnings:

  - Made the column `lastViewedNotifications` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "lastViewedNotifications" SET NOT NULL,
ALTER COLUMN "lastViewedNotifications" SET DEFAULT CURRENT_TIMESTAMP;
