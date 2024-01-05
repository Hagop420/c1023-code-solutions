// import
import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './numberInt.css';

export function Foo() {
  return <FaPlay />;
}

export const StopwatchTsx = () => {
  // timer interval function
  // const counterFromZeroToOne = () => isCounting((count) => count + 1);

  // setting the curr num to starting point 0
  const [curr, isCounting] = useState(0);
  // play , pause btn's
  const [isPlaying, setIsPlaying] = useState(false);

  const [intId, isCounted] = useState<NodeJS.Timeout>();

  // main functionallity
  // let intervalId;

  // random color's function

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  function getRandomColorForTheNum() {
    const r = Math.floor(Math.random() * 155);
    const g = Math.floor(Math.random() * 185);
    const b = Math.floor(Math.random() * 129);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function togglePlayPause() {
    console.log('timer function called');
    if (isPlaying) {
      // If it's playing, clear the timer and reset the counter to 0
      clearInterval(intId); // Clear the interval
      isCounting(0); // Reset the counter to 0
      console.log('stopping the timer', intId);
    } else {
      // If it's paused, start the timer from 0
      console.log('Starting timer');
      isCounting(0); // Reset the counter to 0
      isCounted(
        setInterval(() => {
          isCounting((prevCount) => prevCount + 1);
        }, 1000)
      );
    }
    setIsPlaying((prevState) => {
      return !prevState; // Toggle the state
    });
  }

  // css

  const circleStyling = {
    borderRadius: '50%',
    height: '50px',
    background: getRandomColor(),
    border: `${getRandomColor()} solid 5px`,
    color: getRandomColorForTheNum(),
    padding: '300px 310px',
  };

  const playSize = {
    opacity: '.9',
    cursor: 'pointer',
    margin: '15px',
    fontSize: '40px',
  };

  // function toggle's the play/pause button
  // const togglePlayPause = () => {
  //   setIsPlaying(prevState => !prevState);
  // };

  // returning stopwatch component
  return (
    <>
      <div style={circleStyling}>
        <span className="numb">{curr}</span>
      </div>
      <div onClick={togglePlayPause}>
        {isPlaying ? <FaPause style={playSize} /> : <FaPlay style={playSize} />}
      </div>
    </>
  );
};
