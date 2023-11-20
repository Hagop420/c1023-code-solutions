const gettingTheDots = document.querySelector('h1.message');

setTimeout(setTimeOut, 5000);

function setTimeOut() {
  gettingTheDots.textContent = 'hello there';
  gettingTheDots.classList.add('upper');
}
