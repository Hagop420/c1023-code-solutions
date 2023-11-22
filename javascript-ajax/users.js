const $ul = document.getElementById('user-list');

// creating a new API request
const xhr = new XMLHttpRequest();

// Listning/Calling a API GET request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.responseType = 'json';

xhr.addEventListener('load', () => {
  // const responseLoop = xhr.response

  console.log(xhr.status);
  console.log(xhr.response);

  // looping throughh the responses
  for (let i = 0; i < xhr.response.length; i++) {
    const $createLI = document.createElement('li');
    $createLI.textContent = xhr.response[i].name;

    $ul.appendChild($createLI);
  }
});
xhr.send();
