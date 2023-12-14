// Using/utilizing the promise based API
import { readFile } from 'node:fs/promises';

const fileName = process.argv.slice(2);

try {
  // for (let i = 0; i < fileName.length; i += 1) {
  //   const waiting = await readFile(fileName[i], { encoding: 'utf8' })
  //   console.log(`${waiting} \n`)
  // }
  const proms = fileName.map((path) => readFile(path, 'utf8'));
  const waitinP = await Promise.all(proms);
  console.log(waitinP.join(''));
} catch (err) {
  console.log(err);
  process.exit(1);
}
