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

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const values = [ username ]
  const queryText = `
    SELECT * FROM userinfo
    WHERE username=($1);`;
  
  db.query(queryText, values)
    .then((data) => {
      if (data.rows.length == 0) {
        // res.locals.data = {message: 'user does not exist'}; //to do throw error
        return next(
          createErr({
            method: 'verifyUser',
            type: 'user does not exist',
            err: 'User does not exist',
          })
        );
      } else {
        bcrypt.compare(password, data.rows[0].password).then((result) => {
          if (!result) {
            // res.locals.data = {message: 'wrong passord'}; //todo throw error
            return next(
              createErr({
                method: 'verifyUser',
                type: 'wrong password',
                err: 'Wrong password',
              })
            );
          } else {
            res.locals.data = data.rows[0];
            return next();
          }
        });
      }
    })
    .catch((err) => {
      return next({ log: err, message: { err: 'catch in verifyUser' } });
    });
};

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