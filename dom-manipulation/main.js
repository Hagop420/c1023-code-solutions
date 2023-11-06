const btn = document.querySelector('.hot-button');

let counter = 0;

const mainBtn = btn;

const countDisplay = document.querySelector('.click-count');

mainBtn.addEventListener('click', (e) => {
  counter += 1;
  countDisplay.innerHTML = `Clicks ${counter}`;

  if (counter <= 4) {
    btn.className = 'hot-button cold';
  } else if (counter <= 7) {
    btn.className = 'hot-button cool';
  } else if (counter <= 10) {
    btn.className = 'hot-button tepid';
  } else if (counter <= 13) {
    btn.className = 'hot-button warm';
  } else if (counter <= 16) {
    btn.className = 'hot-button hot';
  }

  console.log(e.target);
});
