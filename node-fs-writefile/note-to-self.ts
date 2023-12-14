// Using/utilizing the promise based API/using the writeFile functionallty
import { writeFile } from 'node:fs/promises';

const [, , note] = process.argv;

try {
  await writeFile('note.txt', note + '\n', 'utf8');
  console.log(
    'Created a new note inside of a file created called note.txt and the content is: \n',
    note
  );
} catch (err) {
  console.log(err);
  process.exit(1);
}
