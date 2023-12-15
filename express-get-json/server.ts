// imports
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

// getting the expres-function/method

const app = express();

// convering the object to a json object/string

app.get('/api/grades', (req, res) => {
  const stringJSONAll = [];
  for (const ind in grades) {
    stringJSONAll.push(grades[ind]);
  }
  res.json(stringJSONAll);
});

// using/implementing the listen method for the express function/method

app.listen(8080, () => {
  console.log(
    'Hello World is on server 8080. Called back/working with:',
    grades,
    ':',
    'object'
  );
});
