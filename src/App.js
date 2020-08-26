import React from "react";
import { add, mult, sub, div } from "./Calc";

function App() {
  return (
    <>
      <ol>
        <li> Sum of two no is {add(40, 4)}.</li>
        <li> Subtraction of two no is {sub(40, 4)}.</li>
        <li> Division of two no is {div(40, 3)}.</li>
        <li> Multiplication of two no is {mult(40, 4)}.</li>
      </ol>
    </>
  );
}

export default App;
