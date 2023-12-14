import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

// new code
async function throwOnce(): Promise<void> {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.

  const awaitMsg = await read('foo', true);
  return console.log(elapsed(), 'throwOnce:', awaitMsg);
}

async function throwSeveral(): Promise<void> {
  const msg = await read('foo1', true);
  console.log(elapsed(), 'throwSeveral1:', msg);
  const msgOne = await read('foo2', true);
  console.log(elapsed(), 'throwSeveral2:', msgOne);
  const msgTwo = await read('foo3', true);
  return console.log(elapsed(), 'throwSeveral3:', msgTwo);
}

async function throwChained(): Promise<void> {
  const msg1 = await read('foo-chain', true);
  console.log(elapsed(), 'throwChained1:', msg1);

  const msg2 = await read('foo-chain2', true);
  console.log(elapsed(), 'throwChained2:', msg2);

  const msg3 = await read('foo-chain3', true);
  console.log(elapsed(), 'throwChained:', msg3);
}

throwOnce();
throwSeveral();
throwChained();

// .then(() => throwOnce()
//     .then(() => throwSeveral())
//       .then(() => throwChained())
//       .catch((msgError) => {
//         return console.log(elapsed(), 'foo1:', msgError);
//       })
// )

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (msgError) {
  console.log(msgError);
}
