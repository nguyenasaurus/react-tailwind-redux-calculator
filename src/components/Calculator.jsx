import { useState } from "react";
import calculate from "../utils/calculate";
import Button from "./Button";
import GridWrapper from "./GridWrapper";

function Calculator() {
  const [displayVal, setDisplayVal] = useState("");
  const [answer, setAnswer] = useState("");

  const operators = ["/", "*", "+", "-", "."];
  const isDisplayValEqualToOne = displayVal.length === 1;

  const updateDisplayVal = (value) => {
    const lastVal = displayVal.slice(-1);
    const lastValArrItem = isDisplayValEqualToOne
      ? displayVal
      : displayVal.split(" ").slice(-1)[0];
    const isOperator = operators.includes(value);
    const isLastValOperator = operators.includes(lastVal);

    // Prevent multiple operators and multiple decimals in a value
    if (
      (isOperator && displayVal === "") ||
      (isLastValOperator && isOperator) ||
      (lastValArrItem.includes(".") && value === ".")
    ) {
      return;
    }

    // Adds spacing between operators and not decimals
    if (value !== "." && lastVal !== "." && (isLastValOperator || isOperator)) {
      setDisplayVal(displayVal + " " + value);
    } else {
      setDisplayVal(displayVal + value);
    }
  };

  const deleteLastValue = () => {
    setDisplayVal(displayVal.slice(0, -1));
  };

  const reset = () => {
    setDisplayVal("");
    setAnswer("");
  };

  const calculateVals = () => {
    if (isDisplayValEqualToOne) {
      return;
    }

    const calculatedValue = calculate(false, displayVal);

    setAnswer(displayVal);
    setDisplayVal(calculatedValue);
  };

  return (
    <GridWrapper>
      <main className="col-span-1 sm:col-span-6 sm:col-start-4  lg:col-span-4 lg:col-start-5 w-full h-full relative bg-theme-calculator-main p-4 rounded-md">
        <section className="rounded-md bg-theme-calculator-input text-theme-primary px-6 py-4 mb-2 w-full text-right">
          <p className="w-full mb-2 text-xs">{answer || "0"}</p>
          <p>{displayVal || "0"}</p>
        </section>
        <section className="bg-theme-calculator-input p-4 rounded-md grid grid-cols-4 gap-2">
          <Button type="primary" onClick={() => updateDisplayVal("7")}>
            7
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("8")}>
            8
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("9")}>
            9
          </Button>
          <Button
            type="secondary"
            className="uppercase font-bold"
            onClick={deleteLastValue}
          >
            del
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("4")}>
            4
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("5")}>
            5
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("6")}>
            6
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("+")}>
            +
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("1")}>
            1
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("2")}>
            2
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("3")}>
            3
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("-")}>
            -
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal(".")}>
            .
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("0")}>
            0
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("/")}>
            /
          </Button>
          <Button type="primary" onClick={() => updateDisplayVal("*")}>
            *
          </Button>
          <Button
            type="secondary"
            className="col-span-2 font-bold uppercase"
            onClick={reset}
          >
            reset
          </Button>
          <Button
            type="tertiary"
            className="col-span-2 font-bold"
            onClick={calculateVals}
          >
            =
          </Button>
        </section>
      </main>
    </GridWrapper>
  );
}
export default Calculator;
