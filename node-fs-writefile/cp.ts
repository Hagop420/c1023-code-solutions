import { readFile, writeFile } from 'node:fs/promises';

const [, , source, dest] = process.argv;

try {
  const innerContents = await readFile(source);
  await writeFile(dest, innerContents);
} catch (err) {
  console.log(err);
  process.exit(1);
}
