import { takeAChance } from './take-a-chance.js';

takeAChance('Jack')
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
