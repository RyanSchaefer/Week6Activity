import { useState } from 'react';
import React from 'react';
import './Calculator.css';
import { CalculatorModel } from "./CalculatorModel";

function CalculatorDisplay(props: any) {
  return <div className="calculator-display">{props.arg}</div>;
}
function CalculatorKey(arg: any) {
  return <button className={`calculator-key ${arg.className}`}  onClick={arg.onPress}>{arg.label}</button>;
}
export default function Calculator() {
  const [model, setModel] = useState(() => new CalculatorModel());
  const [display, setDisplay] = useState(model.display());
  console.log(model);
  return (
    <div className="calculator">
      <CalculatorDisplay arg={display}/>
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <CalculatorKey className="key-clear" label="C" onPress={() => { model.pressClear(); setDisplay(model.display())}}>{'C'}</CalculatorKey>
            <CalculatorKey className="key-sign" label="±" onPress={() => { }}>±</CalculatorKey>
            <CalculatorKey className="key-percent" label="√" onPress={() => { model.pressSqrt(); setDisplay(model.display())  }}>√</CalculatorKey>
          </div>
          <div className="digit-keys">
            <CalculatorKey className="key-0" label="0" onPress={() => { model.pressZero(); setDisplay(model.display())}}>0</CalculatorKey>
            <CalculatorKey className="key-dot" label="•" onPress={() => { model.pressDot(); setDisplay(model.display())}}>●</CalculatorKey>
            <CalculatorKey className="key-1" label="1" onPress={() => { model.pressOne(); setDisplay(model.display())}}>1</CalculatorKey>
            <CalculatorKey className="key-2" label="2" onPress={() => { model.pressTwo();  setDisplay(model.display())}}>2</CalculatorKey>
            <CalculatorKey className="key-3" label="3" onPress={() => { model.pressThree(); setDisplay(model.display())}}>3</CalculatorKey>
            <CalculatorKey className="key-4" label="4" onPress={() => { model.pressFour();  setDisplay(model.display())}}>4</CalculatorKey>
            <CalculatorKey className="key-5" label="5" onPress={() => { model.pressFive();  setDisplay(model.display())}}>5</CalculatorKey>
            <CalculatorKey className="key-6" label="6" onPress={() => { model.pressSix();  setDisplay(model.display())}}>6</CalculatorKey>
            <CalculatorKey className="key-7" label="7" onPress={() => { model.pressSeven(); setDisplay(model.display())}}>7</CalculatorKey>
            <CalculatorKey className="key-8" label="8" onPress={() => { model.pressEight(); setDisplay(model.display())}}>8</CalculatorKey>
            <CalculatorKey className="key-9" label="9" onPress={() => { model.pressNine();  setDisplay(model.display())}}>9</CalculatorKey>
          </div>
        </div>
        <div className="operator-keys">
          <CalculatorKey className="key-divide" label="/" onPress={() => { model.pressDiv(); setDisplay(model.display())}}>÷</CalculatorKey>
          <CalculatorKey className="key-multiply" label="×" onPress={() => { model.pressMult();  setDisplay(model.display())}}>*</CalculatorKey>
          <CalculatorKey className="key-subtract" label="-" onPress={() => { model.pressMinus();  setDisplay(model.display())}}>−</CalculatorKey>
          <CalculatorKey className="key-add" label="+" onPress={() => { model.pressPlus();  setDisplay(model.display())}}>+</CalculatorKey>
          <CalculatorKey className="key-equals" label="=" onPress={() => { model.pressEquals(); setDisplay(model.display())}}>=</CalculatorKey>
        </div>
      </div>
    </div>
  ) 
}