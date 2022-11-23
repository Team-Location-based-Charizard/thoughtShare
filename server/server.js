const express = require('express');
const app = express();
const router = require('/routes/router');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//Import Controllers

// Import Routers

const db = require('./')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', router);

app.use