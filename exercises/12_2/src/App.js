import React from 'react';
import './App.css';
import pokemons from './data'
import MapPokemons from './MapPokemons'
function App() {
  return (
  <div className='App'>
    <MapPokemons poke={pokemons} />
  </div>
  );
}

export default App;
