-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "number" TEXT NOT NULL,
    "nameUser" TEXT NOT NULL,
    "validade" TEXT NOT NULL,
    "digSeg" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("number")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
