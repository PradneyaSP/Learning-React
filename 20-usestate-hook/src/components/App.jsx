import React from "react";

function App() {
  var [count, setCount] = React.useState(0);

  function increase() {
    setCount(++count);
  }

  function decrease() {
    setCount(--count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
