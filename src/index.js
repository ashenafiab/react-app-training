import React from "react";
import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

//which is the same as below
const root = createRoot(document.getElementById("root"));

const fname = "Ashenafi";
const lname = "Abebaw";
const num = 7;
root.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your Lucky Number is {num}</p>
    {/* <p>Your Lucky Number is {3+9}</p> */}
    {/* <p>Your Lucky Number is {Math.random()}</p> */}
    {/* <p>Your Lucky Number is {Math.floor(Math.random() * 10)}</p> */}
  </div>
);