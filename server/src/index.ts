
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3001;

app.use(cors());
app.use("/api/auth/", registrationRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
