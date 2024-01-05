// FILE IMPORT'S
import { useState } from 'react';
import './banners.css';

// prop for RoatingBanner
type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  // state for the number's
  const [currNumber, setCurrNumber] = useState(0);

  function handlerPrevFunc(): void {
    // 3 - 1 + items.lenegth(6) % 6 = 2
    const prevIndex = (currNumber - 1 + items.length) % items.length;
    setCurrNumber(prevIndex);
  }

  function handlerNextFunc(): void {
    // 3 - 1 + items.lenegth(6) % 6 = 2
    const nextIndex = (currNumber + 1) % items.length;
    setCurrNumber(nextIndex);
  }

  function handleBtn(index: number): void {
    // 2 things figure out what index we r clicking on
    // once we know the index we do setCurrentNumber
    setCurrNumber(index);
  }

  return (
    <>
      <Banner item={items[currNumber]} />

      <BannerPrevBtn click={handlerPrevFunc} />

      <BannerNumsFlexerItems click={handleBtn} currNumber={currNumber} />

      <NextBtn click={handlerNextFunc} />
    </>
  );
}

type BannerProps = {
  item: string;
};

export function Banner({ item }: BannerProps) {
  return <h1 className="m-5">{item}</h1>;
}

// COMPONENT 2
type PropsNumberHere = {
  click: () => void;
};

export function BannerPrevBtn({ click }: PropsNumberHere) {
  return (
    <button
      onClick={click}
      className="font-bold m-10 cursor-pointer bg-orange-400	w-20 m-auto text-center rounded hover:bg-yellow-custom transition bg-yellow duration-100 text-black hover:text-black p-2">
      ⬅Prev
    </button>
  );
}

// COMPONENT 3 PARENT

type PropNumber = {
  currNumber: number;
  click: (index: number) => void;
};
export function BannerNumsFlexerItems({ currNumber, click }: PropNumber) {
  const btns = [];
  for (let i = 0; i < 6; i += 1) {
    if (currNumber === i) {
      btns.push(
        // <button onClick={() => click(currNumber)} key={i} className="m-10 bg-gray-300 text-black p-8 cursor-pointer hover: hover:0 transition duration-300 rounded-md shadow-yellow">{i}</button>
        <button
          onClick={() => click(Number(i))}
          key={i}
          className="m-10 bg-gray-300 text-black p-8 cursor-pointer hover: hover:0 transition duration-300 rounded-md shadow-yellow">
          {i}
        </button>
      );
    } else {
      btns.push(
        <button
          onClick={() => click(Number(i))}
          key={i}
          className="m-10 bg-gray-950 text-white p-8 cursor-pointer hover: hover:bg-gray-300 transition duration-300 text-black hover:text-black rounded-md">
          {i}
        </button>
      );
    }
  }

  return <div className="m-auto flex justify-center">{btns}</div>;
}

// COMPONENT 4
type Nextbutton = {
  click: () => void;
};

export function NextBtn({ click }: Nextbutton) {
  return (
    <button
      onClick={click}
      className="font-bold m-10 cursor-pointer bg-orange-400	w-20 m-auto text-center rounded hover:bg-yellow-custom transition bg-yellow duration-100 text-black hover:text-black p-2">
      Next⮕
    </button>
  );
}
