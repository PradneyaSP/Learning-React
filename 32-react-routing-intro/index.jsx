import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count => count + 1);
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home count={count} handleClick={handleClick} />} />
        <Route path="/about" element={<About count={count} handleClick={handleClick} />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home({ count, handleClick }) {
  return (
    <>
      <h1>Hello, React Router!</h1>
      <button onClick={handleClick}>Click Me</button>
      <p>{count}</p>
    </>
  )
}

function About({ count, handleClick }) {
  return (
    <>
      <h1>About page goes here! 🎉</h1>
      <button onClick={handleClick}>Click Me Again</button>
      <p>{count}</p>
    </>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);