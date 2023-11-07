const mainBulb = document.querySelector('.main_Bulb');

// mainBulb.className = 'Main_Bulb';

mainBulb.addEventListener('click', () => {
  if (mainBulb.className === 'main_Bulb') {
    document.body.className = 'blb';
    mainBulb.className = 'main_Bulb grey';
    mainBulb.style.boxShadow = '2px 2px 1rem #f4f4f4';
  } else if (mainBulb.className === 'main_Bulb grey') {
    document.body.className = 'wh';

    mainBulb.className = 'main_Bulb';
    mainBulb.style.boxShadow = '6px 12px 1rem black';
  }
});

// edits
