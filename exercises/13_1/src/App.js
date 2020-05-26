import React from 'react';
import './App.css';
import pokemon from './data'
import DisplayPokemons from './DisplayPokemons';
import PokemonsButton from './PokemonsButton';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';
import About from './About';
import DontMatch from './DontMatch';

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
    return (
      <div className='App'>
        <BrowserRouter>
        <Switch>
          <Route exact path='/'render={()=> <DisplayPokemons pokemDisplay={filteredPokemons[this.state.pokemonIndex]} />} />
          <Route exact path='/pokemons/:id'
          render={ () =>
            <PokemonDetails
            pokemDisplay={filteredPokemons[this.state.pokemonIndex]}
            />}
          />
          <Route path='/About' component={About} />
          <Route component={DontMatch} />
        </Switch>
        </BrowserRouter>
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
            />))}
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
