import { readFile, writeFile } from 'node:fs/promises';

const [, , note] = process.argv;

// creating the object type

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

// creating the statments for the try and catch statments

async function writeFiles(data: Data): Promise<void> {
  data.nextId += 1;
  await writeFile('data.json', JSON.stringify(data), { encoding: 'utf8' });
}

async function createNodes(note: string): Promise<Data> {
  const parsed = await readFile('data.json', { encoding: 'utf8' });

  const notesType = JSON.parse(parsed);

  notesType.notes[notesType.nextId] = note;

  writeFiles(notesType);

  return notesType;
}

// readding function

async function readNodes(): Promise<void> {
  try {
    const resRead = await createNodes(note);
    for (const ind in resRead.notes) {
      console.log(`${ind} - ${resRead.notes[ind]}`);
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

async function deleteNodes(): Promise<void> {
  const data = await createNodes(note);

  delete data.notes[data.nextId];
}

createNodes(note);
readNodes();
readNodes();
deleteNodes();
