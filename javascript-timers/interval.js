const settingTheHOneInterval = document.querySelector('.countdown-display');

let zero = 4;

function myNumber() {
  if (zero === 0) {
    settingTheHOneInterval.textContent = '~earth bellllllooooowwwww us~';
    settingTheHOneInterval.classList.add('upper');
    clearInterval(intervalToBeCleared);
  } else {
    settingTheHOneInterval.textContent = zero;
    zero--;
  }
}

const intervalToBeCleared = setInterval(myNumber, 1000);
