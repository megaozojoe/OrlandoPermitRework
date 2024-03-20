import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className="Main-header">
          <div className="Logo">
            <img src={`${process.env.PUBLIC_URL}/images/Orlando-Logo.png`} alt="Logo" />
          </div>
          <div className="Search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <nav className="Nav-bar">
          <div className="Nav-links">
            <a href="/">Home</a>
            <a href="/catalogue">Catalogue</a>
          </div>

          <div className="Social-signin">
            <a href="/social">Social</a>
            <a href="/signin">Sign In</a>
          </div>
        </nav>
      </header>

    </div>
  );
}

export default App;