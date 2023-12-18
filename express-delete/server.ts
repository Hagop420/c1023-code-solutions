// file import's
import express from 'express';

// creating/looping the grade object

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

// importing/implementing in the express function

const app = express();

// Calling in a simple get request which will listen for a /api/grades req and push the individual objects indide of a new array
// underscore is placed where the parateter/argument is not being used

app.get('/api/grades', (req, res) => {
  const stringJSONAll = [];
  for (const ind in grades) {
    stringJSONAll.push(grades[ind]);
  }

  res.json(stringJSONAll);
});

// using/implementing the listen method for the express function/method

// using/implementing the listen method for the express function/method

app.listen(8080, () => {
  console.log(
    'Hello World is on server 8080. Called back/working with:',
    grades,
    ':',
    'object'
  );
});

// deleting the grades object's get requests parameter

app.delete('/api/grades/:id', (req, res) => {
  //  deletetion calling on the objects path finder
  // step 1 getting/recieving the Parameter of the data in grade object
  const idPullURL = +req.params.id;
  delete grades[idPullURL];
  res.sendStatus(204);
});
