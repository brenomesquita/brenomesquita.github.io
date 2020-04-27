import React from 'react';
import App from './App'


class PokemonsButton extends React.Component{
  render(){
    return(
      <div>
      <button>{this.props.texto}</button>
      </div>
    );
  }
}

export default PokemonsButton;