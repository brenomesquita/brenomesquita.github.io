import React from 'react';
import DisplayPokemons from './DisplayPokemons'

class MapPokemons extends React.Component{
  render(){
    return(
      <div className='pokedex'>
        {this.props.poke.map(el=><DisplayPokemons key={el.id} pokemDisplay={el}/>)}
      </div>
    )
  }
}

export default MapPokemons;
