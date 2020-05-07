import React from 'react';


const PokemonsButton = ({ className, label, disabled, onClick }) => (
  <button
    onClick={onClick}
    className={`button-text ${className}`}
    disabled={disabled}
  >
    {label}
  </button>
);
export default PokemonsButton;