-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "PKPass" TEXT NOT NULL,
    "fullName" TEXT,
    "recordId" TEXT NOT NULL,
    "code_comp" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "lastPasswordChange" TEXT NOT NULL,
    "wrongPassRetry" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "directSuperId" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "lastLogin" TIMESTAMP(3) NOT NULL,
    "firebaseToken" TEXT NOT NULL,
    "leaveBalance" DECIMAL(65,30) NOT NULL,
    "officeLocation" TEXT NOT NULL,
    "changeNo" INTEGER NOT NULL,
    "createBy" TEXT NOT NULL,
    "createDate" TIMESTAMP(3) NOT NULL,
    "changeBy" TEXT NOT NULL,
    "changeDate" TIMESTAMP(3) NOT NULL,
    "shift" TEXT NOT NULL,
    "joainDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
