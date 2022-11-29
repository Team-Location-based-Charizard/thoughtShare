const db = require('../models/userThoughtsModels');

const thoughtController = {};

thoughtController.getAllthoughts = async (req, res, next) => {
  //get all thoughts using user_id
  const { user_id } = req.body;
  const values = [user_id];
  const queryText = `
    SELECT R.user_id, t.* 
    FROM user_thought_rel as R
    JOIN thoughts as t
    ON R.thought_id = t.thought_id
    WHERE R.user_id = ($1);`;

  const thoughtsdata = await db.query(queryText, values);
  // console.log(thoughtsdata);

  res.locals.thoughts = thoughtsdata.rows;
  return next();
};

thoughtController.getOnethought = async (req, res, next) => {
  const { thought_id } = req.body;
  const values = [thought_id];
  const queryText = `
    SELECT * 
    FROM thoughts
    WHERE thought_id = ($1)`;

  const thoughtData = await db.query(queryText, values);
  // console.log('thoughtData from getOnethought after query -->', thoughtData);
  res.locals.thought = thoughtData.rows[0];
  next();
};

thoughtController.createThought = async (req, res, next) => {
  const { thought, location, user_id } = req.body;

  // const date = new Date();
  // // convert date to MM/DD/YYYY HH:MM:SS
  // const dateStr =
  //   ('00' + (date.getMonth() + 1)).slice(-2) +
  //   '/' +
  //   ('00' + date.getDate()).slice(-2) +
  //   '/' +
  //   date.getFullYear() +
  //   ' ' +
  //   ('00' + date.getHours()).slice(-2) +
  //   ':' +
  //   ('00' + date.getMinutes()).slice(-2) +
  //   ':' +
  //   ('00' + date.getSeconds()).slice(-2);

  const queryText = `
    INSERT INTO thoughts (thought, location, user_id)
    VALUES ($1, $2, $3)
    RETURNING *;`;

  const values = [
    thought,
    location,
    user_id
  ];
  const thoughtdata = await db.query(queryText, values);
  const thoughtValues = [user_id, thoughtdata.rows[0].thought_id, true];
  // console.log(thoughtdata);
  // const queryText2 = `
  //   INSERT INTO user_thought_rel (user_id, thought_id, owner)
  //   VALUES ($1, $2, $3)
  //   RETURNING *;`;

  // const reldata = await db.query(queryText2, thoughtValues);
  // console.log(reldata)

  res.locals.thought = thoughtdata.rows[0];
  return next();
};

module.exports = thoughtController;