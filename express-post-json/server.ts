// import's
import express from 'express';

// Creation of the grade object

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

// initing/initilizing/implementing the express method/function

const exp = express();

// POST EXCERSIZE

// nextId variable/const
let nextId = 1;

// use method for styling/enhancing the request

exp.use(express.json());

// next();

// call the API req with a POST reqauest method

exp.post('/api/grades', (req, res) => {
  // error handling
  const bod = req.body;

  if (!bod || !bod.name || !bod.course || !bod.score) {
    return res.status(400).send('Fill in all fields');
  }

  const idGetter = nextId;
  nextId += 1;

  grades[idGetter] = {
    id: idGetter,
    name: bod.name,
    course: bod.course,
    score: bod.score,
  };
  const keysAndVals = grades[idGetter];
  res.json(keysAndVals);
});

exp.get('/api/grades/:id', (req, res) => {
  const id = +req.params.id;
  const grade = grades[id];
  res.json(grade);
});

// listening for the method/API CALL

exp.listen(8080, () => {
  console.log(`Please API gimme back a 200 status of passed(ok)`);
});
