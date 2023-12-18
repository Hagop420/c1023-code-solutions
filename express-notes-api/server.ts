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


// writeFile method

async function writeFilePulledContents(data: Data): Promise<void> {
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
}

// user is able to create a new object entry by using/utilizing a POST request
app.post('/api/notes', async (req, res) => {
  try {
    // utilizing/calling the dataOBJJSON function which call's/reads the data.json file
    const dataObjJSONfile = await filePulledContents();

    // error handling
    const bod = req.body;
    const bodyContent = req.body.content;

    const content: string = req.body.content;
    if (!content) {
      res.status(400).json({ error: 'Hey dummy, send some content!' });
      return;
    }

    const idGetter = nextId;




    dataObjJSONfile.notes[idGetter] = {
      id: idGetter,
      content: bod.content,
    };

    const keysAndVals = dataObjJSONfile.notes[idGetter];
    const note = { id: dataObjJSONfile.nextId, content }
    // res.json(keysAndVals);
    nextId += 1;
    await writeFilePulledContents(dataObjJSONfile)
    res.status(201).json(note)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});
// end/ending the POST request




// GET request/ gets/returns the entire objects

app.get('/api/notes', async (req, res) => {
  // ID pulling functionallity
  // utilizing/calling the dataOBJJSON function which call's/reads the data.json file
  // const dataObjJSONfile = await filePulledContents();
  // res.json(dataObjJSONfile)
  try {
    const dataObjJSONfile = await filePulledContents();
    res.json(dataObjJSONfile)

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});

// ending of GET for specific ID'S

// GET request/ gets the objects with a given id

app.get('/api/notes/:id', async (req, res) => {
  // ID pulling functionallity
  // utilizing/calling the dataOBJJSON function which call's/reads the data.json file
  try {
    const dataObjJSONfile = await filePulledContents();
    const idGetter = +req.params.id;
    const noted = dataObjJSONfile.notes[idGetter];
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
  // convert note ID obj to json format
  // res.json(noted)
});

// ending of GET for specific ID'S





// PUT METHOD


app.put('/api/notes/:id', async (req, res) => {
  try {
    const content: string = req.body.content;
    if (!content) {
      res.status(400).json({ error: 'Hey dummy, send some content!' });
      return;
    }
    const fileCall = await filePulledContents()
    const id = +req.params.id;
    if (!(id in fileCall.notes)) {
      res.status(404).json({ error: `${id} not found` });
      return;
    }
    fileCall.notes[id].content = content;
    await writeFilePulledContents(fileCall);
    res.status(201).json(fileCall.notes[id]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }

})




// delete note


app.delete('/api/notes/:id', async (req, res) => {
  try {
    const fileCalled = await filePulledContents();
    const id = +req.params.id;
    if (!(id in fileCalled.notes)) {
      res.status(404).json({ error: `${id} not found` });
      return;
    }
    delete fileCalled.notes[id];
    await writeFilePulledContents(fileCalled);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unexpected error' });
  }
});

// Invoking/calling the LISTEN METHOD

app.listen(8080, () => {
  console.log(`Hello World is on server 8080`);
});
