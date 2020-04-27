import React from 'react';
let random = () => Math.floor(Math.random()*255);
class DisplayPokemons extends React.Component{
  render(){
    const { name, type, averageWeight, image } = this.props.pokemDisplay
    return(
      <div className='pokemon' style={{backgroundColor: `rgb(${random()}, ${random()}, ${random()})`}}>
          <div>
            <p> {name} </p>
            <p> {type} </p>
            <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>
        <img src={image}/>
      </div>
    );
  }
}

export default DisplayPokemons;
