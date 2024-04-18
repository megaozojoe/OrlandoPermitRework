import { useState } from 'react'
import './App.css'
import PermitData from './PermitData.jsx'
import Footer from './Footer.jsx'

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">

      <header className="App-header">
        <div className="Main-header">
          <div className="Logo">
            <img src="./images/Orlando-Logo.png" alt="Logo" />
          </div>
          
          <div className="Search-bar">
            <input
              type="text"
              placeholder="&#128269;Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className="Nav-bar">
          <div className="Nav-links">
            <a href="https://data.cityoforlando.net/">Home</a>
            <a href="https://data.cityoforlando.net/browse">Catalog</a>
          </div>

          <div className="Social-signing">
            <a href="/social">Social</a>
            <a href="/signing">Sign In</a>
          </div>
        </nav>
      </header>
      <main className="Content-area">
        <PermitData searchQuery={searchQuery} />
      </main>
      <Footer/>
    </div>

  );
}

export default App
