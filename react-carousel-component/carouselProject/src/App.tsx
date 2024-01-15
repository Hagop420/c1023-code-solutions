import './App.css';
import { Carousel, type ObjProps } from './Carousel';

// CAROUSEL PROPERTIE'S
export const images: ObjProps[] = [
  {
    src: 'https://imageio.forbes.com/specials-images/imageserve/5db8823f1a84270007891eae/Official-poster-for-A24-s--Hereditary-/960x0.jpg?height=1053&width=711&fit=bounds',
    alt: 'Megumi Fushiguro',
  },
  {
    src: 'https://i.ebayimg.com/images/g/bowAAOSwDxBfA~d6/s-l1200.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: 'https://qph.cf2.quoracdn.net/main-qimg-7d2378944d84be490a5f5693763c3907-lq',
    alt: 'Yuji Itadori',
  },
  {
    src: 'https://i.ebayimg.com/images/g/1D0AAOSwmP1kVWBR/s-l1600.jpg',
    alt: 'Yuji Itadori',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCIKRjgB3wSmm1_vW0-rsBcdw3R1NblqNpD1lOiyIDmktqie4hsy4ekAFBsVX0Zhka6I&usqp=CAU',
    alt: 'Yuji Itadori',
  },
];

function App() {
  return (
    <>
      <Carousel items={images} />
    </>
  );
}

export default App;
