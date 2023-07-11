import express, { Request, Response } from "express";
import { Movies } from "../../models/movie";

const moviesRouter = express.Router();

//Add check for authentication

const handler = async (req: Request, res: Response) => {
  try {
    const response = await Movies.find();
    if (response) {
      return res.status(201).json({ response });
    }
  } catch (error) {
    console.log(error, req);
  }
  return res.status(503).json({ error: "Nothing happened" });
};

moviesRouter.all("/", handler);

export default moviesRouter;
