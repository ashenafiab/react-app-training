import React from "react";
import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

//which is the same as below
const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>Hello world!</h1>
    <p>This is the begining of JSX</p>
  </div>
);