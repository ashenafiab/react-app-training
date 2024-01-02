import React from "react";
import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

//which is the same as below
const root = createRoot(document.getElementById("root"));

 const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
 };

 customStyle.color = "blue";

root.render(
<h1 style={customStyle}>Hello World!</h1>
);