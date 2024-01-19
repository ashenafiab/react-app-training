import React from "react";
import Login from "./Login";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {/* Ternary Operator */}
      {isLoggedIn ? <h1>Hello User</h1> : <Login />}

      {/* AND Operator */}
      {/* {isLoggedIn && <h1>Hello User</h1>} */}
    </div>
  );
}

export default App;

// the AND operator is used to conditionally render elements. If the first condition is true, the second condition will be evaluated. If the first condition is false, the second condition will be ignored.

// The AND operator is useful when you want to conditionally render an element, but only if the first condition is true.

