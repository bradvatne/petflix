import registrationRouter from "./routes/auth/registrationRouter";
import cors from "cors";
import express from "express";
import db from "./db";
import loginRouter from "./routes/auth/loginRouter";
import moviesRouter from "./routes/movies/moviesRouter";

const app = express();
const port = 3001;
db();
app.use(cors());
app.use("/api/auth/", registrationRouter);
app.use("/api/auth/", loginRouter);
app.use("/api/movies/", moviesRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
