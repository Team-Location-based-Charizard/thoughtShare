const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');
const thoughtController = require('../controllers/thoughtController');

router.post(
  '/addThought', 
  thoughtController.createThought,
  (req, res) => {
    res.status(200).send(res.locals.thought);
  }

);

router.post(
  '/thoughtsNearby',
  thoughtController.getNearbyThoughts,
  (req, res) => {
    res.status(200).send(res.locals.thoughtsNearby)
  }
);

router.get(
  '/allThoughts',
  thoughtController.getAllThoughts,
  (req, res) => {
    console.log('the thoughts are here ===>', res.locals.thoughts);
    return res.status(200).send(res.locals.thoughts);
  }
);


module.exports = router;