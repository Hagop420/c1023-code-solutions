import { TogglerSwitch } from './ToggleSwitch';
import './App.css';

function App() {
  const pClr = { color: '#000', fontSize: '30px' };

  return (
    <>
      <div>
        <p style={pClr}>Light is</p>
        <TogglerSwitch />
      </div>
    </>
  );
}

export default App;
