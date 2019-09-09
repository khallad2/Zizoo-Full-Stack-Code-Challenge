import React from 'react';
import './App.css';
import Header from "./components/Header";
import Landing from "./components/landing";

function App() {
  return (
      <div className="App">
          <header>
              <Header/>
          </header>
          <main>
              <Landing/>
          </main>
      </div>
  );
}

export default App;
