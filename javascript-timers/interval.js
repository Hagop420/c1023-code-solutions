const settingTheHOneInterval = document.querySelector('.countdown-display');

let zero = 4;

function myNumber() {
  if (zero === 0) {
    settingTheHOneInterval.textContent = '~earth bellllllooooowwwww us~';
    settingTheHOneInterval.classList.add('upper');
  } else {
    settingTheHOneInterval.textContent = zero;
    zero--;
  }
}

setInterval(myNumber, 1000);
