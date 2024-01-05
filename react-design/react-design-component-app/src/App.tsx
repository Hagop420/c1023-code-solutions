import './App.css'
import { RotatingBanner } from './RotatingBanner';

// CAROUSEL PROPERTIE'S
const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {

  return (
    <>
      <RotatingBanner items={items} />
    </>
  )
}

export default App
