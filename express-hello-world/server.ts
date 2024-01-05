import express from 'express';

// global express method/function

const app = express();

app.use((req, res) => {
  res.send('Hello World');
});

app.listen(8080, () => {
  console.log(`Hello World is on server 8080`);
});
