// imports
import express from 'express';
import { readFile } from 'node:fs/promises';

// Calling/Invoking the express method/Function
const app = express();

// calling the object calls for the data json file
type Data = {
  nextId: number;
  // notes: Record<number>;
  notes: Record<number, { nextId: number; notes: string; content: string }>;
  content: string;
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

// calling the individual ID'S by using/utilizing the POST request

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
    nextId: idGetter,
    notes: bod.notes,
    content: bod.content,
  };

  const keysAndVals = dataObjJSONfile.notes[idGetter];
  res.json(keysAndVals);
});

// end/ending the POST request

// GET request/ :: /api/notes

app.get('/api/notes/:id', async (req, res) => {
  // ID pulling functionallity
  // utilizing/calling the dataOBJJSON function which call's/reads the data.json file
  const dataObjJSONfile = await filePulledContents();
  const idGetter = +req.params.id;
  const noted = dataObjJSONfile.notes[idGetter];

  if (noted) {
    res.status(200).json(noted);
    return; // Return here to prevent the next line from executing
  }

  // res.json(noted)

  res.status(200).json(dataObjJSONfile);
});

// Invoking/calling the LISTEN METHOD

app.listen(8080, () => {
  console.log(`Hello World is on server 8080`);
});
