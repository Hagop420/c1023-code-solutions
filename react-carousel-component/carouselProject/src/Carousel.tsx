// FILE IMPORT'S
import { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './banners.css';
import { images } from './App';

// prop for RoatingBanner
export type ObjProps = {
  src: string;
  alt: string;
};


type Props = {
  items: ObjProps[]
}


type PosterProps = {
  items: Props[];
  currNumberPr: number;
}


export function RotatingBanner({ items }: Props) {
  // state for the number's
  const [currNumber, setCurrNumber] = useState(0);


  // useEffect for the carousel's interval using setInterval

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
      <Banner items={items} currNumberPr={currNumber} />

      <div className="flex justify-between">
        <BannerPrevBtn click={handlerPrevFunc} />
        <NextBtn click={handlerNextFunc} />
      </div>

      <BannerNumsFlexerItems click={handleBtn} currNumber={currNumber} />

    </>
  );
}



export function Banner({ items, currNumberPr }: PosterProps) {
  const firstItem = items[0];

  return (
    <div className='flex justify-center m-auto flex-col'>
      {/* {items.map((mappingInd, index) => (
        <img className='img_controls cursor-pointer m-10' key={index} src={mappingInd.src} alt={mappingInd.alt} />
      ))} */}
      <img className='img_controls cursor-pointer m-10' src={firstItem.src} alt={firstItem?.alt} />

    </div>
  )
}

// COMPONENT 2
type PropsNumberHere = {
  click: () => void;
};

export function BannerPrevBtn({ click }: PropsNumberHere) {
  return (
    <span onClick={click} className='cursor-pointer'>
      <FaChevronLeft />
    </span>
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
    <span onClick={click} className=''>
      <FaChevronRight />
    </span>
  );
}
