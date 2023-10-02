//2. Create a App.jsx component.
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";

function App() {
  return (
    <main>
      <Header />
      <Board />
      <Footer />
    </main>
  );
}

export default App;
