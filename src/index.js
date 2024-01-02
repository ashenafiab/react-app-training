import React from "react";
import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

//which is the same as below
const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>My Favorite Foods</h1>
    <ul
    // style={{ listStyleType: "decimal" }}
    >
      <li>Burger</li>
      <li>Shekla Tibs</li>
      <li>Kitfo</li>
    </ul>
  </div>
);