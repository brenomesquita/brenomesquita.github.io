import React from 'react';
import { Link } from 'react-router-dom';
import LinksHeader from './LinksHeader';

let random = () => Math.floor(Math.random()*255);
class DisplayPokemons extends React.Component{
  render(){
    const { name, type, averageWeight, image, id } = this.props.pokemDisplay
    return(
      <div>
        <LinksHeader />
        <div className='pokemon' style={{backgroundColor: `rgb(${random()}, ${random()}, ${random()})`}}>
            <div>
              <p> {name} </p>
              <p> {type} </p>
              <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
              <Link to={`/pokemons/${id}`}>PokemonDetails</Link>
            </div>
          <img src={image}/>
        </div>
      </div>
    );
  }
}

export default DisplayPokemons;
