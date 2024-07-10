import { Request, Response } from "express";
import { prisma } from "../index";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, age, img } = req.body;

    if (!name || !email || !age || !img) {
      throw new Error(`Please provide compelete data!`);
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        age,
        img,
      },
    });

    res.status(201).json(newUser);
  } catch (error: any) {
    console.log(error);
    res
      .status(400)
      .json({ error: error?.message || "Something went wrong..." });
  }
};
