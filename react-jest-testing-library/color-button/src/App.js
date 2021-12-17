import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MidnightBlue');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor =
    buttonColor === 'MidnightBlue' ? 'MediumVioletRed' : 'MidnightBlue';

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{
          backgroundColor: disabled ? 'grey' : buttonColor,
          color: 'white',
          cursor: disabled ? 'not-allowed' : 'default',
        }}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
