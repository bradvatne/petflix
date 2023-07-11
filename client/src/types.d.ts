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
