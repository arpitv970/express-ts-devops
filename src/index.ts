import express from "express";
import { PORT } from "./config/dotenv";
import { router as indexRouter } from "./routers";
import { userRouter } from "./routers/users";
import { PrismaClient } from "@prisma/client";

const app = express();
export const prisma = new PrismaClient();

app.use(express.json());

app.use("/api/v1", indexRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
