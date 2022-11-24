const bcrypt = require('bcrypt');
const db = require('../models/userThoughtsModels')

const userController = {}
//bcrypt
const SALT_WORK_FACTOR = 10

userController.createUser = (req, res, next) => {
  const {username, password} = req.body;
  if (username == '' || password == '') {
    return next(
      createErr({
        method: 'createUser',
        type: 'missing info',
        err: 'Missing Info',
      })
    );
  } else {
  bcrypt.hash(password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    const queryText = `
    INSERT INTO userinfo(username, password)
    VALUES($1, $2)
    RETURNING *;`;
  
    const values = [username, hash]
    console.log(``)
    db.query(queryText, values)
    .then((data) => {
      res.locals.data = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({ log: err, message: { err: 'catch in createUser' } });
    });
  });
  }
}

//Error Creator
const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `userController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred in userController.${method}. Check server logs for more details.`,
    },
  };
};

module.exports = userController;