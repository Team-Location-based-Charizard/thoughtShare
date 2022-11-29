const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const sessionController = require('../controllers/sessionController.js');
const cookieController = require('../controllers/cookieController');

router.post(
  '/signup',
  userController.createUser,
  sessionController.startSession,
  cookieController.setCookie,
  (req, res) => {
    res.status(200).send(res.locals.sessionInfo);
  }
);

router.post(
  '/signout', 
  sessionController.endSession, 
  (req, res) => {
    res.status(200).send(res.locals.sessionInfo);
  }
);

//testing for verifyUser
router.post(
  '/login',
  userController.verifyUser,
  sessionController.startSession,
  cookieController.setCookie,
  (req, res) => {
    res.status(200).send(res.locals.sessionInfo);
  }
);

//fetch with session_id to get user_id
router.get(
  '/session', 
  sessionController.verifySession, 
  (req, res) => {
    res.status(200).send(res.locals.sessionInfo);
  }
);

module.exports = router;