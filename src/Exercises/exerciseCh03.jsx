import React, { useState } from "react";

function Chexercise() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [input, setInput] = React.useState("");
  const [nameconvention, setnameconvention] = React.useState("time");
  const Clickedtimes = () => {
    setCount1(count1 + 1);
    if (count1 > 0) {
      setnameconvention("times");
    }
  };
  const Clickedtimes2 = () => {
    setCount2(count2 + 1);
    if (count2 > 0) {
      setnameconvention("times");
    }
  };
  const Resetbtn = (input, count1, count2) => {
    setCount1(0);
    setCount2(0);
    setInput("");
  };
  const Typing = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      {/* <button onClick={Clickedtimes}>
        Clicked {count1} {nameconvention}
      </button>
      <button onClick={Clickedtimes2}>
        Clicked {count2} {nameconvention}
      </button>
      <button onClick={Resetbtn}>Rest</button> */}

      <input
        onChange={Typing}
        type="text"
        placeholder="Type here..."
        value={input}
      />
      <button onClick={Resetbtn}>Rest</button>
      <p>{input}</p>
    </>
  );
}
export default Chexercise;
