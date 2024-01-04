// FILE IMPORT'S
import { useState } from "react";
import './banners.css'

// prop for RoatingBanner
type Props = {
  items: string[]
}


export function RotatingBanner({ items }: Props) {

  // state for the number's
  const [currNumber, setNumber] = useState(0)


  function handlerPrevFunc() {

  }

  return (


    <>
      <Banner item={items[currNumber]} />


      <BannerPrevBtn />

      <BannerNumsFlexerItems currNumber={currNumber} />

      <NextBtn />

    </>
  )
}

type BannerProps = {
  item: string
}

export function Banner({ item }: BannerProps) {
  return (
    <h1 className="m-5">{item}</h1>
  )
}


// COMPONENT 2

export function BannerPrevBtn() {
  return (
    <div className="font-bold m-10 cursor-pointer bg-orange-400	w-20 m-auto text-center rounded hover:bg-yellow-custom transition bg-yellow duration-100 text-black hover:text-black p-2">⬅Prev</div>
  )
}


// COMPONENT 3 PARENT

type PropNumber = {
  currNumber: number
}
export function BannerNumsFlexerItems({ currNumber }: PropNumber) {
  // return (
  //   <div className="m-auto flex justify-center">
  //     <span className="m-10 bg-gray-300 text-black p-8 cursor-pointer hover: hover:0 transition duration-300 rounded-md shadow-yellow">0</span>
  //     <span className="m-10 bg-gray-950 text-white p-8 cursor-pointer hover: hover:bg-gray-300 transition duration-300 text-black hover:text-black rounded-md"
  //     >1</span>
  //     <span className="m-10 bg-gray-950 text-white p-8 cursor-pointer hover: hover:bg-gray-300 transition duration-300 text-black hover:text-black rounded-md">2</span>
  //     <span className="m-10 bg-gray-950 text-white p-8 cursor-pointer hover: hover:bg-gray-300 transition duration-300 text-black hover:text-black rounded-md">3</span>
  //     <span className="m-10 bg-gray-950 text-white p-8 cursor-pointer hover: hover:bg-gray-300 transition duration-300 text-black hover:text-black rounded-md">4</span>
  //     <span className="m-10 bg-gray-950 text-white p-8 cursor-pointer hover: hover:bg-gray-300 transition duration-300 text-black hover:text-black rounded-md">5</span>
  //   </div>
  // )

  // looping


  const btns = []
  for (let i = 0; i < 6; i += 1) {
    if (currNumber === i) {
      btns.push(
        <span className="m-10 bg-gray-300 text-black p-8 cursor-pointer hover: hover:0 transition duration-300 rounded-md shadow-yellow">{i}</span>

      )
    } else {
      btns.push(
        <span className="m-10 bg-gray-950 text-white p-8 cursor-pointer hover: hover:bg-gray-300 transition duration-300 text-black hover:text-black rounded-md">{i}</span>

      )
    }

  }

  return (
    <div className="m-auto flex justify-center">{btns}</div>
  )


}


// COMPONENT 4

export function NextBtn() {
  return (
    <div className="font-bold m-10 cursor-pointer bg-orange-400	w-20 m-auto text-center rounded hover:bg-yellow-custom transition bg-yellow duration-100 text-black hover:text-black p-2">Next⮕</div>
  )
}
