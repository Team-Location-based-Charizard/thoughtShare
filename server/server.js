const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//Import Controllers

// Import Routers
const authRouter = require("./routes/authRouter");
const thoughtRouter = require("./routes/thoughtRouter");

const app = express();
const db = require("./models/userThoughtsModels");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("*/api/auth", authRouter);
app.use("*/api/thoughts", thoughtRouter);

// 404 error
app.use("/*", (req, res) => {
  return res.sendStatus(404);
});

// Express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "A error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log, " ", err);
  return res.status(errorObj.status).json(err);
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`TEST Server listening on port: ${process.env.PORT}`);
});
