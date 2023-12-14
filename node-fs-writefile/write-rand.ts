import { writeFile } from 'node:fs/promises';

// randomNumbers generation
const data = Math.random().toString();

try {
  // const fileCreation = await writeFile('random.txt' , data + '\n' ,  'utf8' )
  const fileCreation = await writeFile('dewkerewqkfvwqhfdvwhqvhd.txt', data);

  console.log(
    `NewFile i created called randomText contains a random number which will be \n ${fileCreation}`
  );
  // error handler

  // error handler
  if (typeof fileCreation === 'undefined') {
    throw new Error('File creation failed');
  }
} catch (err) {
  console.log(err);
}
