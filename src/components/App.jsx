import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent.jsx";

class App extends React.Component {
  render() {
    // return <ClassComponent />; or
    return <FunctionalComponent />;
  }
}

export default App;
