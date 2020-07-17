import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="container">
        <Container />
      </div>
    </div>
  );
}

export default App;
