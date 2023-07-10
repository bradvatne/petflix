import mongoose, { Document, Schema } from "mongoose";

interface IThumbnail {
  small: string;
  medium?: string;
  large: string;
}

interface IThumbnailGroup {
  trending: IThumbnail;
  regular: IThumbnail;
}

interface IMovie extends Document {
  title: string;
  thumbnail: IThumbnailGroup;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

const ThumbnailSchema: Schema = new Schema<IThumbnail>({
  small: { type: String, required: true },
  medium: String,
  large: { type: String, required: true },
});

const ThumbnailGroupSchema: Schema = new Schema<IThumbnailGroup>({
  trending: { type: ThumbnailSchema, required: true },
  regular: { type: ThumbnailSchema, required: true },
});

const MovieSchema: Schema = new Schema<IMovie>({
  title: { type: String, required: true },
  thumbnail: { type: ThumbnailGroupSchema, required: true },
  year: { type: Number, required: true },
  category: { type: String, required: true },
  rating: { type: String, required: true },
  isBookmarked: { type: Boolean, default: false },
  isTrending: { type: Boolean, default: false },
});

const Movie = mongoose.model<IMovie>("Movie", MovieSchema);

export { Movie, IMovie };
