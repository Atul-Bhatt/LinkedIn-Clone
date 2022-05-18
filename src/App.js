import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className="app__body">
          <Sidebar />
          {/* Sidebar */}
          {/* Feed */}
          {/* Widgets */}
        </div>
      </header>
    </div>
  );
}

export default App;
