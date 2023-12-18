// imports
import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

// Calling/Invoking the express method/Function
const app = express();

// calling the object calls for the data json file
type Note = {
  id: number;
  content: string;
};

type Data = {
  nextId: number;
  notes: Record<number, Note>;
};

// ID number going to be incremented
let nextId = 1;

app.use(express.json());

// calling/reading the content inside of data.json

async function filePulledContents(): Promise<Data> {
  const objectDataJSONFilePulled = await readFile('data.json', {
    encoding: 'utf8',
  });
  return JSON.parse(objectDataJSONFilePulled);
}

// user is able to create a new object entry by using/utilizing a POST request
app.post('/api/notes', async (req, res) => {
  // utilizing/calling the dataOBJJSON function which call's/reads the data.json file
  const dataObjJSONfile = await filePulledContents();

  // error handling
  const bod = req.body;

  if (!bod || !bod.content || !bod.notes) {
    return res.status(400).send('Fill in all fields');
  }

  const idGetter = nextId;
  nextId += 1;



  dataObjJSONfile.notes[idGetter] = {
    id: idGetter,
    content: bod.content,
  };

  const keysAndVals = dataObjJSONfile.notes[idGetter];
  res.json(keysAndVals);
});
// end/ending the POST request




// GET request/ gets/returns the entire objects

app.get('/api/notes', async (req, res) => {
  // ID pulling functionallity
  // utilizing/calling the dataOBJJSON function which call's/reads the data.json file
  const dataObjJSONfile = await filePulledContents();
  res.json(dataObjJSONfile)
});

// ending of GET for specific ID'S

// GET request/ gets the objects with a given id

app.get('/api/notes/:id', async (req, res) => {
  // ID pulling functionallity
  // utilizing/calling the dataOBJJSON function which call's/reads the data.json file
  const dataObjJSONfile = await filePulledContents();
  const idGetter = +req.params.id;
  const noted = dataObjJSONfile.notes[idGetter];
  // convert note ID obj to json format
  // res.json(noted)
});

// ending of GET for specific ID'S

// Invoking/calling the LISTEN METHOD

app.listen(8080, () => {
  console.log(`Hello World is on server 8080`);
});
