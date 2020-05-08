import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinksHeader from './LinksHeader';
import pokemons from './data';
let random = () => Math.floor(Math.random()*255);

export default class PokemonDetails extends Component {
  render() {
    const { name, type, averageWeight, image, summary, foundAt } = this.props.pokemDisplay
    //if(console.log(pokemons.some(el=>el.id===console.log(id)))) return(<h1>ok</h1>)
    return (
      <div>
        <LinksHeader />
        <div className='pokemon' style={{backgroundColor: `rgb(${random()}, ${random()}, ${random()})`}}>
            <div>
              <p> {name} </p>
              <p> {type} </p>
              <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
            </div>
          <img src={image}/>
        </div>
        <div>
          <p>{summary}</p>
        </div>
        {foundAt.map(el=>
        <div>
          <p>{el.location}</p>
          <img src={`${el.map}`} />
        </div>)}
      </div>
    )
  }
}
