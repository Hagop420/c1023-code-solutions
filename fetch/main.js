// Fetching in a sample placeholder API that get's the name's converted to JSON format
const getAsyncAPIDataFromDataBase = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonPlaced = await response.json();
    if (!response.ok) {
      throw new error(`Fetch error ${response.status}`);
    }
    console.log(jsonPlaced);
  } catch (err) {
    console.log('ERR of:', err);
  }
};

getAsyncAPIDataFromDataBase();

// Default method for sending is a GET so no need to specify it
// Getting/Recieving a GET request that get's my favorite pokemon from pokeAPI

const pokeAPIGetReq = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new error(`Fetch error ${respone.status}`);
    }
    const jsonPlaced = await response.json();
    console.log(jsonPlaced);
  } catch (err) {
    console.log('ERR of:', err);
  }
};

pokeAPIGetReq();
