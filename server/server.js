const express = require('express');
const cors = require('cors');
//const router = require('/routes/router');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//Import Controllers

// Import Routers

const app = express();
// const { db } = require('../models/MessageModel');
const db = require('./models/userThoughtsModels')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', (req, res) => {
  
});

// Express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error', 
    status: 500,
    message: { err: 'A error occurred' },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log, ' ', err);
  return res.status(errorObj.status).json(err);
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`TEST Server listening on port: ${process.env.PORT}`);
})

module.exports = app;