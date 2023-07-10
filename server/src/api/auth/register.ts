import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User, IUser } from "../../schemas/user";

const router = express.Router();

router.post("/auth/login", async (req: Request, res: Response) => {
  // Get the user from the database
  const user: IUser | null = await User.findOne({ email: req.body.email });

  if (user === null) {
    // If the user isn't found in the database, return a message
    return res.status(400).json({ error: "Invalid email or password" });
  }

  // Compare the provided password with the one in the database
  const isPasswordValid: boolean = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordValid) {
    // If the password is not valid, return a message
    return res.status(400).json({ error: "Invalid email or password" });
  }

  // If the credentials are correct, generate a JWT
  const token: string = jwt.sign(
    { id: user._id, email: user.email },
    "yourSecretKey", // Remember to change this to your secret key
    { expiresIn: "1h" }
  );

  // Send the token to the client
  return res.json({ token });
});

export default router;
