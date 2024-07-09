import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [memory, setMemory] = useState(0);

  const handleNumberClick = (number) => {
    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setFirstOperand(parseFloat(display));
    setDisplay("0");
  };

  const handleEqualsClick = () => {
    const secondOperand = parseFloat(display);
    let result;

    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
      case "%":
        result = firstOperand % secondOperand;
        break;
      case "x²":
        result = firstOperand ** 2;
        break;
      case "x³":
        result = firstOperand ** 3;
        break;
      case "√":
        result = Math.sqrt(firstOperand);
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setFirstOperand(result);
    setOperator(null);
  };

  const handleMemoryClick = (action) => {
    switch (action) {
      case "MC":
        setMemory(0);
        break;
      case "M+":
        setMemory(memory + parseFloat(display));
        break;
      case "M-":
        setMemory(memory - parseFloat(display));
        break;
      case "MR":
        setDisplay(memory.toString());
        break;
      default:
        return;
    }
  };

  const handleTrigonometricClick = (func) => {
    const angle = parseFloat(display);
    let result;

    switch (func) {
      case "sin":
        result = Math.sin(angle);
        break;
      case "cos":
        result = Math.cos(angle);
        break;
      case "tan":
        result = Math.tan(angle);
        break;
      case "sinh":
        result = Math.sinh(angle);
        break;
      case "cosh":
        result = Math.cosh(angle);
        break;
      case "tanh":
        result = Math.tanh(angle);
        break;
      default:
        return;
    }

    setDisplay(result.toString());
  };

  const handleLogarithmicClick = (func) => {
    const value = parseFloat(display);
    let result;

    switch (func) {
      case "log10":
        result = Math.log10(value);
        break;
      case "e":
        result = Math.exp(value);
        break;
      case "EE":
        result = value * Math.E;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
  };

  const handleOtherClick = (func) => {
    switch (func) {
      case "2nd":
        // not sure what this key does, possibly a secondary function
        break;
      case "X!":
        const factorial = (n) => {
          if (n === 0) return 1;
          return n * factorial(n - 1);
        };
        setDisplay(factorial(parseFloat(display)).toString());
        break;
      case "10x":
        setDisplay((10 ** parseFloat(display)).toString());
        break;
      case "hu":
        // not sure what this key does, possibly a custom function
        break;
      case "ex":
        // not sure what this key does, possibly a custom function
        break;
      case "☑":
        // not sure what this key does, possibly a custom function or a checkbox
        break;
      case "Rand":
        setDisplay(Math.random().toString());
        break;
      case "II":
        // not sure what this key does, possibly a custom function or a secondary function
        break;
      default:
        return;
    }
  };

  return (
    <div className="calculator grid grid-cols-10 bg-[#414141] h-[18rem] w-[80] rounded-[10px]">
      <div className="display col-span-full text-5xl text-right pr-2 align-bottom">
        {display}
      </div>
      <div className="buttons grid grid-cols-subgrid gap-0.5 col-span-10 font-bold">
        <button className="col-span-1" onClick={() => handleNumberClick("7")}>
          (
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("8")}>
          )
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("9")}>
          mc
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("+")}>
          m+
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("4")}>
          m-
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("5")}>
          mr
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("6")}>
          C
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("-")}>
          +/-
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("1")}>
          %
        </button>
        <button
          className="col-span-1 bg-[#f0a03a]"
          onClick={() => handleNumberClick("2")}
        >
          ÷
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("7")}>
          2<sup>nd</sup>
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("8")}>
          x<sup>2</sup>
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("9")}>
          x<sup>3</sup>
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("+")}>
          x<sup>y</sup>
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("4")}>
          e<sup>x</sup>
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("5")}>
          10<sup>x</sup>
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("6")}>
          7
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("-")}>
          8
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("1")}>
          9
        </button>
        <button
          className="col-span-1 bg-[#f0a03a]"
          onClick={() => handleNumberClick("2")}
        >
          ×
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("3")}>
          <sup>1</sup>/<sub>2</sub>
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("*")}>
          √x
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("0")}>
          &#8731;x
        </button>
        <button className="col-span-1" onClick={() => handleMemoryClick("MC")}>
          <sup>y</sup>&#8730;x
        </button>
        <button className="col-span-1" onClick={() => handleMemoryClick("M+")}>
          In
        </button>
        <button className="col-span-1" onClick={() => handleMemoryClick("M-")}>
          log<sub>10</sub>
        </button>
        <button className="col-span-1" onClick={() => handleMemoryClick("MR")}>
          4
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("/")}>
          5
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("%")}>
          6
        </button>
        <button
          className="col-span-1 bg-[#f0a03a]"
          onClick={() => handleOperatorClick("x²")}
        >
          -
        </button>
        <button
          className="col-span-1"
          onClick={() => handleOperatorClick("x³")}
        >
          x!
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("√")}>
          sin
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("sin")}
        >
          cos
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("cos")}
        >
          tan
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("tan")}
        >
          e
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("sinh")}
        >
          EE
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("cosh")}
        >
          1
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("tanh")}
        >
          2
        </button>
        <button
          className="col-span-1"
          onClick={() => handleLogarithmicClick("log10")}
        >
          3
        </button>
        <button
          className="col-span-1 bg-[#f0a03a]"
          onClick={() => handleLogarithmicClick("e")}
        >
          +
        </button>
        <button
          className="col-span-1 rounded-es-xl"
          onClick={() => handleLogarithmicClick("EE")}
        >
          Rad
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("2nd")}>
          sinh
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("X!")}>
          cosh
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("10x")}>
          tanh
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("hu")}>
          PI
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("ex")}>
          Rand
        </button>
        <button className="col-span-2" onClick={() => handleOtherClick("☑")}>
          0
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("II")}>
          .
        </button>
        <button
          className="col-span-1 bg-[#f0a03a] rounded-ee-xl"
          onClick={handleEqualsClick}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
