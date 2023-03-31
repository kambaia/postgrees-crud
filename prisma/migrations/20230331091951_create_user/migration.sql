/*
  Warnings:

  - Added the required column `permission` to the `users` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `role` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "permission" TEXT NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" INTEGER NOT NULL,
ALTER COLUMN "profile" DROP NOT NULL;
