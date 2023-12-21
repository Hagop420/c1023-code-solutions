// import's
import pg from 'pg';
import express from 'express';
import { ClientError } from './client-error.js';

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

// POOL'ED THE SQL DATABASE

// Implementing/Utilizing express method

const app = express();

// JSON PARSING
app.use(express.json());

// Getting the id of the individual grade
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    // validate the inputs FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    // Ok, the input is reasonable, time to query the database.
    // We are NOT putting the user input directly into our query;
    // instead, we are sending the user input in a separate array.
    /*
     * Review the documentation on parameterized queries here:
     * https://node-postgres.com/features/queries#parameterized-query
     * You'll be using this technique to prevent SQL injection attacks.
     *
     * https://www.youtube.com/watch?v=_jKylhJtPmI
     */
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    // If we get here, the query succeeded, even if nothing was found.
    // The Result object will include an array of rows.
    // See the docs on results: https://node-postgres.com/apis/result
    const grade = result.rows[0];
    if (!grade) {
      // We could not have known ahead of time without actually querying the db,
      // but the specific grade being requested was not found in the database.
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    // The specific grade was found in the database, yay! Return it.
    res.json(grade);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

// GET REQUEST calling the grades table(SQL)
app.get('/api/grades', async (_, res, next) => {
  try {
    // SQL query to get all rows from the grades table
    const sql = 'SELECT * FROM grades';
    // const gradesInfo = sql

    // query by using the pool clause

    const queryState = await db.query(sql);

    const queryResult = queryState.rows[0];

    res.json(queryResult);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

// Creating a new post using the POST method

app.post('/api/grades', async (req, res, next) => {
  try {
    // SQL query to get all rows from the grades table
    const { name, course, score } = req.body;

    if (!name) {
      throw new ClientError(400, 'no name');
    }
    if (!course) {
      throw new ClientError(400, 'no course');
    }
    if (!score) {
      throw new ClientError(400, 'no score');
    }

    const sql = `
    UPDATE "grade"
      set name = $4
          course = $2
          score = $3
          where "gradeId" = $1
          returning *
    `;

    // const gradesInfo = sql

    // query by using the pool clause

    const queryState = await db.query(sql);

    const queryResult = queryState.rows[0];

    res.json(queryResult);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

// PUT method

app.put('/api/grades:gradeId', async (req, res, next) => {
  try {
    // validate the inputs FIRST
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }

    const { name, course, score } = req.body;

    if (!name) {
      throw new ClientError(400, 'no name');
    }
    if (!course) {
      throw new ClientError(400, 'no course');
    }
    if (!score) {
      throw new ClientError(400, 'no score');
    }

    const sql = `
    UPDATE "grade"
      set name = $4
          course = $2
          score = $3
          where "gradeId" = $1
          returning *
    `;

    const paramsRower = [gradeId];
    const resres = await db.query(sql, paramsRower);

    res.json(resres);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

app.delete('/api/grades:gradeId', async (req, res, next) => {
  try {
    // error handlping

    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }

    const sql = `
      delete from "grades"
        where "gradeId" = $1
        returning *;
    `;

    const paramsRower = [gradeId];
    const resres = await db.query(sql, paramsRower);
    const grade = resres.rows[0];
    if (!grade) {
      // We could not have known ahead of time without actually querying the db,
      // but the specific grade being requested was not found in the database.
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    res.json(resres);
  } catch (err) {
    // The query failed for some reason
    // possibly due to a syntax error in the SQL statement;
    // send `err` to the error handling middleware
    next(err);
  }
});

// LISTEN FOR EXPRESS PORTS/CALLS

app.listen(8080, () => {
  console.log(`Port 8080 started...`);
});
