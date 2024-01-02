import React from "react";
import { createRoot } from "react-dom/client";
import pi, {doublePi,triplePi} from "./math";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

//which is the same as below
const root = createRoot(document.getElementById("root"));

root.render(
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>{pi}</li>
  <li>{doublePi()}</li>
  <li>{triplePi()}</li>
</ul>
);