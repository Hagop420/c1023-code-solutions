const mainBulb = document.querySelector('.Main_Bulb');

// mainBulb.className === 'Main_Bulb';

mainBulb.addEventListener('click', () => {
  if (mainBulb.className === 'Main_Bulb') {
    document.body.className = 'blb';
    mainBulb.className = 'Main_Bulb grey';
    mainBulb.style.boxShadow = '2px 2px 1rem #f4f4f4';
  } else if (mainBulb.className === 'Main_Bulb grey') {
    document.body.className = 'wh';

    mainBulb.className = 'Main_Bulb';
    mainBulb.style.boxShadow = '6px 12px 1rem black';
  }
});

// edits
