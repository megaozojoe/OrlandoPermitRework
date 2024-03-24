import React, { useState } from 'react';
import './App.css';
import PermitData from './PermitData';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">

      <header className="App-header">
        <div className="Main-header">
          <div className="Logo">
            <img src={`${process.env.PUBLIC_URL}/images/Orlando-Logo.png`} alt="Logo" />
          </div>
          
          <div className="Search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
      <main className="Content-area">
        <PermitData searchQuery={searchQuery} />
      </main>

    </div>
  );
}

export default App;