import React from "react";

function App() {
  let [time, setTime] = React.useState(new Date().toLocaleTimeString());

  function updateTime() {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }
  return (
    <div className="container">
      <h1>{time} </h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
