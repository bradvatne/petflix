import registrationRouter from "./routes/auth/registrationRouter";
import cors from 'cors'
import express from 'express'

const app = express();
const port = 3001;

app.use(cors());
app.use("/api/auth/", registrationRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
