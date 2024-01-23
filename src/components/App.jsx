import React from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(now);
  setInterval(updateTime, 1000);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    //   console.log(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
