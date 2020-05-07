import React from 'react';
const Button = (props) => {
  const { showComponent, isDisable, value } = props;
  return (
    <button
      type="button"
      disabled={isDisable}
      onClick={() => showComponent()}
    >
      {value}
    </button>
  )
}
export default Button;
