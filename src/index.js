import React from "react";
import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

//which is the same as below
const root = createRoot(document.getElementById("root"));

root.render(
<h1 style={{color: "red"}}>Hello World!</h1>
);