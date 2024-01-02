import React from "react";
import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

//which is the same as below
const root = createRoot(document.getElementById("root"));

const name = "Ashenafi";
const currentDate = new Date();
const year = currentDate.getFullYear();

root.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>
);