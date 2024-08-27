import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    setDisplay((prev) => (prev === '0' ? value : prev + value));
  };

  const handleClear = () => setDisplay('0');
  const handleDelete = () => setDisplay(display.slice(0, -1) || '0');
  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={display} readOnly />
      </div>
      <div className="buttons">
        <button className="special" onClick={handleClear}>clr</button>
        <button className="special" onClick={handleDelete}>DEL</button>
        <button onClick={() => handleClick('%')}>%</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button id="equal" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
