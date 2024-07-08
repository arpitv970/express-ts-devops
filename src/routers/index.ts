import { Router } from "express";
import { controller as indexController } from "../controllers";

export const router = Router();

router.get("/", indexController);
