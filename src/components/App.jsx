import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        // ...prevValue is a spread operator. It allows you to expand an iterable like an array or object into individual elements.
        ...prevValue, 
        [name]: value
        // [name] is a computed property name. It allows you to use a variable as a key in an object literal property name. 
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name" autoComplete="off"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name" autoComplete="off"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email" autoComplete="off"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
