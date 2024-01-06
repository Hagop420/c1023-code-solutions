// FILE IMPORT'S
import { useState } from "react";
import './drawerComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// PARENT COMPONENT

// prop

type TitleProps = {
  titles: string[];
  // onSelect:(item: string[]) => void
}


export function AppDrawer({ titles, onSelect }: TitleProps) {
  // state for the list display ul item's
  const [currDrawwerOpened, setcurrDrawerOpened] = useState(false)


  return (
    <>
      <div>
        <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={() => setcurrDrawerOpened(!currDrawwerOpened)} />
      </div>
      {currDrawwerOpened && <DrawerOpened items={titles} clickedItem={titles} />}
      <TitleArr titles={titles} />
      <Svgimgcomp />
      {currDrawwerOpened && <Overlayed isOpen={currDrawwerOpened} onClicked={() => setcurrDrawerOpened(false)} />}
      {/* {titles.length === 0 ? setcurrDrawerOpened(false) : setcurrDrawerOpened(true)} */}
    </>
  )

}


function TitleArr({ titles }: TitleProps) {
  // State for the current menu item select
  const [currTtl, setCurTtl] = useState(0)

  return (
    <h1>{titles[currTtl]}</h1>

  )
}






function Svgimgcomp() {
  return (
    <img src="../src/img/bbb.png" alt="SVG_loz." className="autoed_img" />

  )
}

// prop's
type MappingProp = {
  items: string[]
  clickedLiItem: (index: string) => void
}

function DrawerOpened({ items, clickedLiItem }: MappingProp) {
  return (
    <div className="menu-drawer is-open">
      <ul className="unstyle menu-items">
        {items.map((ttlEach) => (
          <li className="menu-item" onClick={() => clickedLiItem(ttlEach)} key={ttlEach}>{ttlEach}</li>
        ))}

      </ul>
    </div>
  )
}

type OverlayedProp = {
  isOpen: boolean,
  onClicked: () => void,
}

function Overlayed({ isOpen, onClicked }: OverlayedProp) {
  return (

    <div onClick={onClicked} className={isOpen === true ? 'menu-shade is-drawn' : 'menu-shade'}></div>



  )
}
