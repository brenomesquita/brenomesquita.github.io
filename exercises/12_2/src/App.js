import React from 'react';
import './App.css';
import pokemons from './data'
import MapPokemons from './MapPokemons';
import PokemonsButton from './PokemonsButton';

class App extends React.Component { 
  constructor(){
    super()

    this.state={
      text: '',
    }
  }
  render(){
    return (
  <div className='App'>
    <MapPokemons poke={pokemons} />
    <PokemonsButton texto="boato1" />
  </div>
  );
  }
  
}

export default App;
