import React from "react";

// for e.g: 9
// function Heading() {
//     return <h1>My Favorite Foods</h1>;
//   }

//for e.g: 10
function Heading() {
const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good morning my favorite foods are";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good afternoon my favorite foods are";
  customStyle.color = "green";
}
else {
  greeting = "Good evening my favorite foods are";
  customStyle.color = "blue";
}

return(
<h1 className="heading" style={customStyle}>{greeting}</h1>
);
}

export default Heading;
