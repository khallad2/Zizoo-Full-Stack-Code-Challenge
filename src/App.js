import React from 'react';
import './App.css';
import Search from "./components/search/search";
import Header from "./components/header/Header";
import FooterPage from "./components/footer/Footer";

function App() {
  return (
          <div className="App">
              <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
              <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
              <Header/>
              <Search/>
              <FooterPage/>
          </div>
  );
}

export default App;
