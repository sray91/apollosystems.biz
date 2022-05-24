import React from 'react';
import './App.css';
import logo from "./assets/logo_w_words.svg";

function App() {
  return (
    <main class="hero-container">
      <div class="hero-image">
        <img src={logo}></img>
      </div>
      <div class="hero-content">
        <h1 class="center">Consulting + IT Support</h1>
      </div>
    </main>
  );
}

export default App;