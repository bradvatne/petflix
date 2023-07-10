import express, {Request, Response} from 'express';
import { Movie } from '../../models/movie';

const listMoviesRouter = express.Router();

const handler = async(req: Request, res: Response) => {
  try {
    const response = await Movie.find();
    if (response) {
      return res.status(201).json({response})
    }
  } catch (error) {
    console.log(error, req)
  }
  return res.status(503).json({error: "Nothing happened"})
}

listMoviesRouter.all('/', handler);
