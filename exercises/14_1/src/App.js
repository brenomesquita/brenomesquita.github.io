import React from 'react';
import Dropdown from './Dropdown';
import './App.css';

function App() {
  const content = [
    {id: 1, XABLAU: 'a'},
    {id: 2, XABLAU: 'b'},
    {id: 3, XABLAU: 'c'},
    {id: 4, XABLAU: 'd'},
  ];

  return (
    <div className="App">
      <Dropdown content={content}>Título da lista customizado</Dropdown>
    </div>
  );
}

export default App;