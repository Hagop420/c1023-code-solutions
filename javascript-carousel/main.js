// variables
const imgs = document.querySelectorAll('img');
const controlButtons = document.querySelectorAll('.fa-solid');

// for(let i = 0; i < controlButtons.length; i++){
// }
controlButtons[0].classList.add('OR');

// getting the right and left chevron icon's

let currVal = 0;
let idTime;

// function for all of the images
controlButtons[0].className = 'fa OR fa-circle';

function getImages(target) {
  //
  for (let i = 0; i < imgs.length; i++) {
    const arrRandomClrs = [
      'red',
      'blue',
      'green',
      'yellow',
      'orange',
      'purple',
      'pink',
      'brown',
      'cyan',
      'magenta',
      'lime',
      'teal',
      'indigo',
      'violet',
      'maroon',
      'olive',
      'navy',
      'aquamarine',
      'coral',
      'gold',
      'gray',
      'silver',
      'black',
      'white',
      '#FF5733', // Hex color
      '#8A2BE2', // Hex color
      '#00FF7F', // Hex color
      '#FFD700', // Hex color
      '#4CAF50', // Hex color
      '#FF6347', // Hex color
    ];
    if (i === target) {
      const clr = Math.floor(Math.random() * arrRandomClrs.length);
      document.body.style.background = arrRandomClrs[clr];
      imgs[i].className = 'carousel-image';
      // imgs[i].classList.remove('hidden');
      // controlButtons[i].classList.add('fa-solid')
      controlButtons[i].className = 'fas OR fa-circle';
    } else {
      imgs[i].className = 'carousel-image hidden';
      // controlButtons[i].classList.add('button-toggler-controls');
      // controlButtons[i].className = 'far button-toggler-controls';
      controlButtons[i].className = 'fa fa-circle';
    }
  }
  currVal = target;
  setTimerAutoScroll();
}

function setTimerAutoScroll() {
  clearTimeout(idTime);
  idTime = setTimeout(function () {
    getImages(moveNextVal());
  }, 3000);
}

function moveNextVal() {
  if (currVal === imgs.length - 1) {
    return 0;
  } else {
    return currVal + 1;
  }
}

function getPreviousIndex(e) {
  if (currVal === 0) {
    return imgs.length - 1;
  } else {
    return currVal - 1;
  }
}

function clickerAnimation(e) {
  if (e.target.matches('.back')) {
    getImages(getPreviousIndex());
    return;
  }

  if (e.target.matches('.forward')) {
    getImages(moveNextVal());
    return;
  }

  if (!e.target.matches('.fa-solid')) {
    return;
  }

  for (let i = 0; i < controlButtons.length; i++) {
    if (e.target === controlButtons[i]) {
      getImages(i);
      break;
    }
  }
}

const mainCarousel = document.querySelector('#carousel');
mainCarousel.addEventListener('click', clickerAnimation);

setTimerAutoScroll();
