// Using/utilizing the promise based API
import { readFile } from 'node:fs/promises';

// finding the actual file path and returning it's content

try {
  // await the filePathContentGetter function/method
  const fileFinding = await readFile('./dijkstra.txt', 'utf8');

  console.log(`File content contains \n ${fileFinding}`);
} catch (error) {
  console.error(`error in file ${error}`);
  process.exit(1);
}
