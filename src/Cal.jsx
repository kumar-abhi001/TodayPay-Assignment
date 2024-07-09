import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [memory, setMemory] = useState(0);

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const handleNumberClick = (number) => {
    if (display === "0") {
      setDisplay(number);
      setExpression(number);
    } else {
      setDisplay(display + number);
      setExpression(expression + number);
    }
  };

  const handleOperatorClick = (operator) => {
    setExpression(expression + operator);
    setDisplay(display + operator);
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(expression);
      setDisplay(result.toString());
      setExpression(result.toString());
    } catch (error) {
      setDisplay("Error");
      setExpression("");
    }
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
    let result;

    switch (func) {
      case "sin":
        result = Math.sin;
        break;
      case "cos":
        result = Math.cos;
        break;
      case "tan":
        result = Math.tan;
        break;
      case "sinh":
        result = Math.sinh;
        break;
      case "cosh":
        result = Math.cosh;
        break;
      case "tanh":
        result = Math.tanh;
        break;
      default:
        return;
    }
    if (display === "0") {
      setDisplay(func);
    } else {
      setDisplay(display + func + "(");
    }
    setExpression(expression + result + "(");
  };

  const handleLogarithmicClick = (func) => {
    let value = "";
    for (let i = display.length - 1; i >= 0; i--) {
      if (!numbers.includes(display[i])) {
        break;
      }
      value += display[i];
    }

    value = value.split("").reverse().join("");
    const temp = value;
    value = parseFloat(value);
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

    setExpression(
      expression.substr(0, expression.length - temp.length) + result
    );
    setDisplay(display.substr(0, display.length - temp.length) + result);
  };

  const handleOtherClick = (func) => {
    switch (func) {
      case "2nd":
        // Implement secondary function if needed
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
        setDisplay(Math.PI.toString());
        break;
      case "ex":
        setDisplay(Math.exp(parseFloat(display)).toString());
        break;
      case "☑":
        // Implement custom function if needed
        break;
      case "Rand":
        setDisplay(Math.floor(Math.random() * (10000 - 0) + 0).toString());
        setExpression(display)
        break;
      case "II":
        // Implement custom function if needed
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
        <button className="col-span-1" onClick={() => handleOperatorClick("(")}>
          (
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick(")")}>
          )
        </button>
        <button className="col-span-1" onClick={() => handleMemoryClick("MC")}>
          mc
        </button>
        <button className="col-span-1" onClick={() => handleMemoryClick("M+")}>
          m+
        </button>
        <button className="col-span-1" onClick={() => handleMemoryClick("M-")}>
          m-
        </button>
        <button className="col-span-1" onClick={() => handleMemoryClick("MR")}>
          mr
        </button>
        <button
          className="col-span-1"
          onClick={() => {
            setDisplay("0");
            setExpression("");
          }}
        >
          C
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("-")}>
          +/-
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("%")}>
          %
        </button>
        <button
          className="col-span-1 bg-[#f0a03a]"
          onClick={() => handleOperatorClick("/")}
        >
          ÷
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("2nd")}>
          2<sup>nd</sup>
        </button>
        <button
          className="col-span-1"
          onClick={() => handleOperatorClick("**2")}
        >
          x<sup>2</sup>
        </button>
        <button
          className="col-span-1"
          onClick={() => handleOperatorClick("**3")}
        >
          x<sup>3</sup>
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick("^")}>
          x<sup>y</sup>
        </button>
        <button
          className="col-span-1"
          onClick={() => handleOperatorClick("exp(")}
        >
          e<sup>x</sup>
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("10x")}>
          10<sup>x</sup>
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button
          className="col-span-1 bg-[#f0a03a]"
          onClick={() => handleOperatorClick("*")}
        >
          ×
        </button>
        <button
          className="col-span-1"
          onClick={() => handleOtherClick("sqrt(")}
        >
          <sup>1</sup>/<sub>2</sub>
        </button>
        <button
          className="col-span-1"
          onClick={() => handleOperatorClick("Math.sqrt(")}
        >
          √x
        </button>
        <button
          className="col-span-1"
          onClick={() => handleOperatorClick("Math.cbrt(")}
        >
          &#8731;x
        </button>
        <button
          className="col-span-1"
          onClick={() => handleOtherClick("xrooty")}
        >
          <sup>y</sup>&#8730;x
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("log")}>
          ln
        </button>
        <button
          className="col-span-1"
          onClick={() => handleLogarithmicClick("log10")}
        >
          log<sub>10</sub>
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button
          className="col-span-1 bg-[#f0a03a]"
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("X!")}>
          x!
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("sin")}
        >
          sin
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("cos")}
        >
          cos
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("tan")}
        >
          tan
        </button>
        <button
          className="col-span-1"
          onClick={() => handleLogarithmicClick("e")}
        >
          e
        </button>
        <button
          className="col-span-1"
          onClick={() => handleLogarithmicClick("EE")}
        >
          EE
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className="col-span-1" onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button
          className="col-span-1 bg-[#f0a03a]"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
        <button
          className="col-span-1 rounded-es-xl"
          onClick={() => handleOtherClick("Rad")}
        >
          Rad
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("sinh")}
        >
          sinh
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("cosh")}
        >
          cosh
        </button>
        <button
          className="col-span-1"
          onClick={() => handleTrigonometricClick("tanh")}
        >
          tanh
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("hu")}>
          PI
        </button>
        <button className="col-span-1" onClick={() => handleOtherClick("Rand")}>
          Rand
        </button>
        <button className="col-span-2" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button className="col-span-1" onClick={() => handleOperatorClick(".")}>
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
