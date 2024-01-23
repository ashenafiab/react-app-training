import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [headingText, setHeadingText] = React.useState("");
  const [isMouseOver, setMouseOver] = React.useState(false);

  function handleChange(event) {
    // console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
    // console.log(name);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form  onSubmit={handleClick}>
      <input
        onChange={handleChange}
        type="text"
        id="name"
        placeholder="What's your name?"
        autoComplete="off"
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
               onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
        </form>
    </div>
  );
}

export default App;
