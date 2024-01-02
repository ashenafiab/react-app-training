import React from "react";
import { createRoot } from "react-dom/client";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

//which is the same as below
const root = createRoot(document.getElementById("root"));

const img = "https://picsum.photos/200";
root.render(
  <div>
    <h1 className="heading" contentEditable="true">My Favorite Pictures</h1>
    {/* <div> */}
      <img alt="random" src={img /*+ "?grayscale"*/}></img>
      {/* <img className="food-img" src="https://i.pinimg.com/564x/b9/2f/97/b92f97005bb7ebd60cda4a2a3cc2e547.jpg"></img>
      <img className="food-img" src="https://dailydoseofpositiveliving.files.wordpress.com/2020/06/tibs-4.png"></img>
      <img className="food-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaA4sqcvFmkcxlG63QnCKpqdLv2V9kJAZ82Q&usqp=CAU"></img> */}
    {/* </div> */}
  </div>
);