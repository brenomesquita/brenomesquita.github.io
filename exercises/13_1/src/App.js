import React from 'react';
import './App.css';
import pokemon from './data'
import DisplayPokemons from './DisplayPokemons';
import PokemonsButton from './PokemonsButton';

class App extends React.Component { 
  constructor(){
    super()

    this.state = {
      pokemonIndex: 0,
      type:'all',
  };
  }
  updateFilterState(type) {
    this.setState({ pokemonIndex: 0, type });
  }
  clique(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }
  fetchFilteredPokemons() {
    const {type} = this.state;

    return pokemon.filter(pokemon => {
      if (type === 'all') return true;
      return pokemon.type === type;
    });
  }

  test = () => {
    return pokemon
      .map((pokemon) => pokemon.type)
      .reduce(
        (types, type) => (types.includes(type) ? types : [...types, type]),
        [],
      );
  };

  render(){
    const map = this.test()
    const filteredPokemons = this.fetchFilteredPokemons();
    console.log(this.state.type)
    return (
      <div className='App'>
        <DisplayPokemons pokemDisplay={filteredPokemons[this.state.pokemonIndex]} />
        <div className="selector-button-container">
        <PokemonsButton
              className="select-type"
              onClick={()=>this.updateFilterState("all")}
              label={"todos"}
            />
          {map.map((type) => (
            <PokemonsButton
              className="select-type"
              key={type}
              onClick={()=>this.updateFilterState(type)}
              label={type}
            />
          ))}
        </div>
        <PokemonsButton 
        onClick={()=>this.clique(filteredPokemons.length)}
        label={'proximo pokemon'}
        disabled={filteredPokemons.length<=1}
        />
      </div>
  );
  }
  
}

export default App;
