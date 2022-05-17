import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
