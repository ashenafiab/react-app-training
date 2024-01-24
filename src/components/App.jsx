import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    // const { value, name } = event.target;
    // the above line of code except that the variable names are changed is the same as the below two lines of code, but in a single line of code using ES6 destructuring concept of JS
    const newvalue = event.target.value;
    const inputname = event.target.name;

    setFullName((prevValue) => {
      if (inputname === "fName") {
        return {
          fName: newvalue,
          lName: prevValue.lName,
        };
      } else if (inputname === "lName") {
        return {
          fName: prevValue.fName,
          lName: newvalue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
