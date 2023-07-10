import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../../models/user";
import multer from "multer";

const registrationRouter = express.Router();
const upload = multer();

registrationRouter.post(
  "/register",
  upload.none(),
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser)
        return res
          .status(409)
          .json({ error: "User already exists. Login instead" });

      const SALT_ROUNDS = 10;
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      const newUser = new User({ email, password: hashedPassword });

      await newUser.save();
      return res.json({ message: "User registration successful" });
    } catch (error) {
      return res.status(501).json({ error: "Error checking DB for user" });
    }
  }
);

export default registrationRouter;
