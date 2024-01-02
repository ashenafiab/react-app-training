import React from "react";
import { createRoot } from "react-dom/client";
import * as Calculator from "./calculator";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

//which is the same as below
const root = createRoot(document.getElementById("root"));

root.render(
<ul>
  <li>{Calculator.add(1,2)}</li>
  <li>{Calculator.subtract(7,2)}</li>
  <li>{Calculator.multiply(2,3)}</li>
  <li>{Calculator.divide(5,2)}</li>
</ul>
);