// Fetching in a sample placeholder API that get's the name's converted to JSON format
const getAsyncAPIDataFromDataBase = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const jsonPlaced = await response.json();
  console.log(jsonPlaced);
};

getAsyncAPIDataFromDataBase();

// Default method for sending is a GET so no need to specify it
// Getting/Recieving a GET request that get's my favorite pokemon from pokeAPI

const pokeAPIGetReq = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  const jsonPlaced = await response.json();
  console.log(jsonPlaced);
};

pokeAPIGetReq();
