const allLetters = document.querySelectorAll('span');
const spanSp = document.querySelectorAll('.space');

// borders

let currVal = 0;

// allLetters[0].className = 'bl'

window.addEventListener('keydown', (event) => {
  const currKey = event.key;
  const currKeyPoint = allLetters[currVal];
  if (currKey === currKeyPoint.textContent) {
    currKeyPoint.className = 'no-more-border correct-key';
    // console.log(currKeyPoint.nextElementSibling);
    currKeyPoint.nextElementSibling.className = 'g';
    currVal++;
  } else {
    currKeyPoint.className = 'g incorrect-key';
  }

  if (currKey === spanSp) {
    currKeyPoint.className = 'no-more-border correct-key space';
    // console.log(currKeyPoint.nextSibling);
    currVal++;
  }

  // console.log(currKey === spanSp)
});

// spanSp.className = 'space'

// window.addEventListener('keyup', (ev) => {
//   // const currKey = ev.key;

//   // if (currKey === ' ') {
//   //   // Append the space to a specific element with an ID (e.g., a <div> with id "output")

//   //   // Or store the space character in a variable

//   //   spanSp.forEach((sp) => {
//   //     if (currKey === ' ') sp.className = 'space';
//   //   });
//   // }
// });

//   window.addEventListener('keyup' ,(ev) =>{
// const currKeyPoint = allLetters[currVal]

//       const currKey = event.key

//     if(currKey === ' '){
//       // currKeyPoint.className = '
//     }
//   })
