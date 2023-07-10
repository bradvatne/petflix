import express, { Request, Response } from "express";
import { Movies } from "../../models/movie";

const moviesRouter = express.Router();

const handler = async (req: Request, res: Response) => {
  console.log("ding");
  try {
    const response = await Movies.find();
    if (response) {
      console.log(response);
      return res.status(201).json({ response });
    }
  } catch (error) {
    console.log(error, req);
  }
  return res.status(503).json({ error: "Nothing happened" });
};

moviesRouter.all("/", handler);

export default moviesRouter;
