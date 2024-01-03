// import
import { useState } from 'react';
import './switcher.css';

// creating the main toggler component

export const TogglerSwitch = () => {
  // current state of the content switch is off
  const [currContent, SetLight] = useState(true);

  function bodySwitcher() {
    SetLight(!currContent);
    if (currContent === true) {
      document.body.style.background = 'grey';
    } else {
      document.body.style.background = '#fff';
    }
  }

  const divWH = {
    color: '#000',
  };

  return (
    <div
      onClick={bodySwitcher}
      className={currContent ? 'toggle-switch is-on' : 'toggle-switch'}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span style={divWH} className="state-label">
        {currContent ? 'ON' : 'OFF'}
      </span>
    </div>
  );
};
