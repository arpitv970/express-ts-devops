import { Request, Response } from "express";
import { prisma } from "../index";

export const fetchAllUser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    if (users.length === 0) {
      throw new Error("No User exists in DB");
    }

    res.status(201).json({ data: users });
  } catch (error: any) {
    console.log(error);
    res
      .status(400)
      .json({ error: error?.message || "Something went wrong..." });
  }
};

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
        age: Number(age),
        img,
      },
    });

    res.status(201).json({ data: newUser });
  } catch (error: any) {
    console.log(error);
    res
      .status(400)
      .json({ error: error?.message || "Something went wrong..." });
  }
};
