import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import multer from "multer";
import { User } from "../../models/user";
import jwt from "jsonwebtoken";

const loginRouter = express.Router();
const upload = multer();

loginRouter.post(
  "/login",
  upload.none(),
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          const payload = {
            userId: user._id,
            iat: Date.now(),
            exp: Date.now() + 3600000,
          };
          const secret = "thisisthejsonwebtokensecret";
          const token = jwt.sign(payload, secret);
          return res.status(201).json({ success: token });
        }
      }
    } catch (err) {
      console.log(err);
    }
    return res.status(501).json({ error: "poopy pants" });
  }
);

export default loginRouter;
