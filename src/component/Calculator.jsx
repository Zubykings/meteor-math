import React, { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
    console.log(value);
  };

  const calculateResult = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const clearExpression = () => {
    setExpression("");
  };

  const deleteLastInput = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const calcCharacters = [
    {
      value: "C",
      onclick: clearExpression,
      style: " top-row",
    },
    {
      value: "AC",
      onclick: deleteLastInput,
      style: " top-row",
    },
    {
      value: "%",
      onclick: () => handleButtonClick("%"),
      style: " top-row",
    },
    {
      value: "/",
      onclick: () => handleButtonClick("/"),
      style: " character",
    },
    {
      value: "7",
      onclick: () => handleButtonClick("7"),
    },
    {
      value: "8",
      onclick: () => handleButtonClick("8"),
    },
    {
      value: "9",
      onclick: () => handleButtonClick("9"),
    },
    {
      value: "*",
      onclick: () => handleButtonClick("*"),
      style: " character",
    },
    {
      value: "4",
      onclick: () => handleButtonClick("4"),
    },
    {
      value: "5",
      onclick: () => handleButtonClick("5"),
    },
    {
      value: "6",
      onclick: () => handleButtonClick("6"),
    },
    {
      value: "-",
      onclick: () => handleButtonClick("-"),
      style: " character",
    },
    {
      value: "1",
      onclick: () => handleButtonClick("1"),
    },
    {
      value: "2",
      onclick: () => handleButtonClick("2"),
    },
    {
      value: "3",
      onclick: () => handleButtonClick("3"),
    },
    {
      value: "+",
      onclick: () => handleButtonClick("+"),
      style: " character",
    },
    {
      value: "0",
      onclick: () => handleButtonClick("0"),
      style: "zero",
    },
    {
      value: ".",
      onclick: () => handleButtonClick("."),
    },
    {
      value: "=",
      onclick: calculateResult,
      style: " character",
    },
  ];

  return (
    <div className="border-4 rounded-2xl border-[#BE7D21] w-[420px] calc ">
      <div className="flex flex-col rounded-lg  justify-center  px-7 pb-5">
        <div className=" text-end text-6xl my-2 h-[70px] px-19 overflow-hidden">{expression}</div>
        <div className="buttons  grid grid-cols-4 gap-3 ">
          {calcCharacters.map((calculator, index) => (
            <button
              key={index}
              onClick={calculator.onclick}
              className={`${calculator.style} rounded-full transition-all duration-300`}
            >
              {calculator.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
