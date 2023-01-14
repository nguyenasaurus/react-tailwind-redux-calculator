import { useState } from "react";
import calculate from "../utils/calculate";

function Calculator() {
  const [displayVal, setDisplayVal] = useState("");
  const [answer, setAnswer] = useState("");

  const operators = ["/", "*", "+", "-", "."];
  const isDisplayValEqualToOne = displayVal.length === 1;

  const updateDisplayVal = (value) => {
    const lastVal = displayVal.slice(-1);
    const lastValArrItem = isDisplayValEqualToOne ? displayVal : displayVal.split(' ').slice(-1)[0];
    const isOperator = operators.includes(value);
    const isLastValOperator = operators.includes(lastVal);

    // Prevent multiple operators and multiple decimals in a value
    if ((isOperator && displayVal === '') || (isLastValOperator && isOperator) || (lastValArrItem.includes('.') && value === '.')) {
        return;
    } 

    // Adds spacing between operators and not decimals
    if ( value !== '.' && lastVal !== '.' && (isLastValOperator || isOperator)) {
      setDisplayVal(displayVal + ' ' + value);
    }
    else {
      setDisplayVal(displayVal + value);
    }
  };

  const deleteLastValue = () => {
    setDisplayVal(displayVal.slice(0,-1))
  }

  const reset = () => {
    setDisplayVal('');
    setAnswer('');
  }

  const calculateVals = () => {

    if (isDisplayValEqualToOne) {
      return;
    }

    const calculatedValue = calculate(false, displayVal);

    setAnswer(displayVal);
    setDisplayVal(calculatedValue);
  }

  return (
    <main className="relative h-1/2 w-1/3 bg-theme-calculator-main p-4">
      <section className="rounded-md bg-theme-calculator-input text-theme-primary px-6 py-4 mb-2 w-full">
        <p className="w-full mb-2 text-xs">{answer || "0"}</p>
        <p>{displayVal || "0"}</p>
      </section>
      <section className="bg-theme-calculator-input p-4 rounded-md grid grid-cols-4 gap-2">
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('7')}>
          7
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('8')}>
          8
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('9')}>
          9
        </button>
        <button className="bg-theme-button-secondary rounded-sm border-b-4 border-theme-button-secondary font-bold uppercase text-theme-primary" onClick={() => deleteLastValue()}>
          del
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('4')}>
          4
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('5')}>
          5
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('6')}>
          6
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('+')}>
          +
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('1')}>
          1
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('2')}>
          2
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('3')}>
          3
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('-')}>
          -
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('.')}>
          .
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('0')}>
          0
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('/')}>
          /
        </button>
        <button className="bg-theme-button-primary rounded-sm border-b-4 border-theme-button-primary text-theme-button-primary" onClick={() => updateDisplayVal('*')}>
          *
        </button>

        <button className="col-span-2 bg-theme-button-secondary rounded-sm border-b-4 border-theme-button-secondary font-bold uppercase text-theme-primary" onClick={() => reset()}>
          reset
        </button>
        <button className="col-span-2 bg-theme-button-tertiary rounded-sm border-b-4 border-theme-button-tertiary font-bold uppercase text-theme-primary" onClick={() => calculateVals()}>
          =
        </button>
      </section>
    </main>
  );
}
export default Calculator;
