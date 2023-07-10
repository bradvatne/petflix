import express, { Request, Response } from "express";
import { User, IUser } from "../../models/user";
import multer from "multer";

const upload = multer();
const registrationRouter = express.Router();

registrationRouter.post(
  "/register",
  upload.none(),
  (req: Request, res: Response) => {
    // Business logic for user registration goes here

    // Example code to access request body parameters
    const { email, password } = req.body as IUser;

    console.log(email, password);
    // Example code to send a response
    res.json({ message: "User registration successful" });
  }
);

export default registrationRouter;
