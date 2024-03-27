// Using/utilizing the promise based API
import { readFile } from 'node:fs/promises';

// using/utilizing a new promise of fileFinder with async/await

console.log(process.argv);

try {
  const fileFinding = await readFile(process.argv[2], { encoding: 'utf8' });

  console.log(`This files content/text contains \n ${fileFinding}`);
} catch (err) {
  console.log(err);
  process.exit(1);
}
