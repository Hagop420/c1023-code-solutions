// import
import { useState } from 'react';

export const HotButton = ({ text }) => {
  // setCount function
  // function setCount(count) {
  //   // increment count by 1
  //   return count + 1
  // }

  // calling the function n storing it in a variable

  const incrementations = () => isCounter((count) => count + 1);

  // useState sets current/starting number value to 0
  const [curr, isCounter] = useState(0);

  // return main button component

  // inline css styling
  const btnClrs = {
    display: 'block',
    margin: '15px auto',
    backgroundColor: 'darkblue',
  };
  const btnClrsGreaterThanFour = {
    display: 'block',
    margin: '15px auto',
    backgroundColor: 'blue',
  };

  const btnClrsGreaterThanSixandLessThen15 = {
    display: 'block',
    margin: '15px auto',
    backgroundColor: 'darkred',
  };

  const redMore = {
    display: 'block',
    margin: '15px auto',
    backgroundColor: 'red',
  };
  const redagain = {
    display: 'block',
    margin: '15px auto',
    backgroundColor: 'red',
  };
  const blblCoal = {
    display: 'block',
    margin: '15px auto',
    backgroundColor: '#000',
    color: 'yellow',
  };

  // if (curr) {
  if (curr === 0) {
    console.log(curr);
    return (
      <button onClick={incrementations} style={btnClrs}>
        {text} {curr}
      </button>
    );
  } else if (curr >= 1 && curr < 6) {
    return (
      <button onClick={incrementations} style={btnClrsGreaterThanFour}>
        {'Cold'} {curr}
      </button>
    );
  } else if (curr >= 6 && curr < 15) {
    return (
      <button
        onClick={incrementations}
        style={btnClrsGreaterThanSixandLessThen15}>
        {'Warm'} {curr}
      </button>
    );
  } else if (curr >= 15 && curr <= 25) {
    return (
      <button onClick={incrementations} style={redMore}>
        {'Warm'} {curr}
      </button>
    );
  } else if (curr >= 25 && curr <= 35) {
    return (
      <button onClick={incrementations} style={redagain}>
        {'very hot'} {curr}
      </button>
    );
  } else if (curr >= 35) {
    return (
      <button onClick={incrementations} style={blblCoal}>
        {'Hot af so im dead'} {curr}
      </button>
    );
  }

  // }
};
