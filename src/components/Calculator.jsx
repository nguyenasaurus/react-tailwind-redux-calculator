import { useState } from "react";

function Calculator() {
  const [displayVal, setDisplayVal] = useState("");
  const [answer, setAnswer] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateDisplayVal = (value) => {
    const lastVal = displayVal.slice(-1);
    const isOperator = operators.includes(value);
    const isLastValOperator = operators.includes(lastVal);

    if ((isOperator && displayVal === '') || (isLastValOperator && isOperator)) {
        return;
    } 

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

  const calculate = (array) => {

    if (displayVal.length === 1) {
      return;
    }

    const displayValArr = array || displayVal.split(' ');

    if (displayValArr.length > 1) {
      const beforeVal = (index) => Number(displayValArr[index - 1]);
      const afterVal = (index) => Number(displayValArr[index + 1]);

      if (displayValArr.includes('/')) {
        const divideIndex = displayValArr.indexOf('/');
        const dividedVal = beforeVal(divideIndex) / afterVal(divideIndex);

        displayValArr.splice((divideIndex - 1), 3, dividedVal);
        calculate(displayValArr);
      }

      if (displayValArr.includes('*')) {
        const multiplyIndex = displayValArr.indexOf('*');
        const multipliedVal = beforeVal(multiplyIndex) * afterVal(multiplyIndex);
        displayValArr.splice((multiplyIndex - 1), 3, multipliedVal);
        calculate(displayValArr);
      }

      if (displayValArr.includes('+')) {
        const addIndex = displayValArr.indexOf('+');
        const addedVal = beforeVal(addIndex) + afterVal(addIndex);

        displayValArr.splice((addIndex - 1), 3, addedVal);
        calculate(displayValArr);
      }

      if (displayValArr.includes('-')) {
        const subtractIndex = displayValArr.indexOf('-');
        const subtractVal = beforeVal(subtractIndex) - afterVal(subtractIndex);

        displayValArr.splice((subtractIndex - 1), 3, subtractVal);
        calculate(displayValArr);
      }
    }

    setAnswer(displayVal);
    setDisplayVal(displayValArr);
  }

  return (
    <main className="relative h-1/2 w-1/3 bg-sky-900 p-4">
      <section className="rounded-md bg-slate-900 text-white px-6 py-4 mb-2 w-full">
        <p className="w-full mb-2 text-xs">{answer || "0"}</p>
        <p>{displayVal || "0"}</p>
      </section>
      <section className="bg-slate-900 p-4 rounded-md grid grid-cols-4 gap-2">
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('7')}>
          7
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('8')}>
          8
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('9')}>
          9
        </button>
        <button className="bg-slate-500 rounded-sm border-b-4 border-slate-600 font-bold uppercase text-white" onClick={() => deleteLastValue()}>
          del
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('4')}>
          4
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('5')}>
          5
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('6')}>
          6
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('+')}>
          +
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('1')}>
          1
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('2')}>
          2
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('3')}>
          3
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('-')}>
          -
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('.')}>
          .
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('0')}>
          0
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('/')}>
          /
        </button>
        <button className="bg-zinc-300 rounded-sm border-b-4 border-zinc-400 text-zinc-800" onClick={() => updateDisplayVal('*')}>
          *
        </button>

        <button className="col-span-2 bg-slate-500 rounded-sm border-b-4 border-slate-600 font-bold uppercase text-white" onClick={() => reset()}>
          reset
        </button>
        <button className="col-span-2 bg-red-600 rounded-sm border-b-4 border-red-900 font-bold uppercase text-white" onClick={() => calculate()}>
          =
        </button>
      </section>
    </main>
  );
}
export default Calculator;
