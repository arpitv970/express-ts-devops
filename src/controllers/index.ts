import { Request, Response } from "express";

export const controller = async (req: Request, res: Response) => {
  return res.json({ message: "Hello World!" });
};
