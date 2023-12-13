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
  try {
    const awaitMsg = await read('foo', true);
    return console.log(elapsed(), 'throwOnce:', awaitMsg);
  } catch (msg) {
    return console.log(elapsed(), 'throwSeveral Error:', msg);
  }
}

async function throwSeveral(): Promise<void> {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  try {
    const msg = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', msg);
    const msgOne = await read('foo2', false);
    console.log(elapsed(), 'throwSeveral2:', msgOne);
    const msgTwo = await read('foo3', false);
    return console.log(elapsed(), 'throwSeveral3:', msgTwo);
  } catch (error) {
    return console.log(elapsed(), 'throwSeveral Error:', error);
  }
}

async function throwChained(): Promise<void> {
  try {
    const msg1 = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', msg1);

    const msg2 = await read('foo-chain2', false);
    console.log(elapsed(), 'throwChained2:', msg2);

    const msg3 = await read('foo-chain3', false);
    console.log(elapsed(), 'throwChained:', msg3);
  } catch (err) {
    return console.log(elapsed(), 'throwSeveral Error:', err);
  }
}

throwOnce()
  .then(() => throwSeveral())
  .then(() => throwChained());
