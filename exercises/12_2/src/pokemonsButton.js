import React from 'react';
let random = () => Math.floor(Math.random()*255);
class pokemonsButon extends React.Component{
  render(){
    return(
      <div className='pokemon' style={{backgroundColor: `rgb(${random()}, ${random()}, ${random()})`}}>
          ok
      </div>
    );
  }
}

export default DisplayPokemons;