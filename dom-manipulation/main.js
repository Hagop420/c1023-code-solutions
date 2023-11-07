const $btn = document.querySelector('.hot-button');

let counter = 0;

const countDisplay = document.querySelector('.click-count');

$btn.addEventListener('click', (e) => {
  counter += 1;
  countDisplay.textContent = `Clicks: ${counter}`;

  if (counter < 4) {
    $btn.className = 'hot-button cold';
  } else if (counter < 7) {
    $btn.className = 'hot-button cool';
  } else if (counter < 10) {
    $btn.className = 'hot-button tepid';
  } else if (counter < 13) {
    $btn.className = 'hot-button warm';
  } else if (counter < 16) {
    $btn.className = 'hot-button hot';
  } else {
    $btn.className = 'hot-button nuclear';
  }

  console.log(e.target);
});

// btn.textContent = 'Cold button';
