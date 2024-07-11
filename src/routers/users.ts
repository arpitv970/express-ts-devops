import { Router } from "express";
import { createUser, fetchAllUser } from "../controllers/users";

export const userRouter = Router();

userRouter.post("/create-user", createUser);
userRouter.get("/", fetchAllUser);
