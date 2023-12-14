import express from 'express';

// global express method/function

const app = express();

app.listen(8080, () => {
  console.log(`Expres server listening/running on port 8080`);
});

// calling the number by it's port
