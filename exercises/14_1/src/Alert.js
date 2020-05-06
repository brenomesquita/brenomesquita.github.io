import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  return (
    <div className='Alert'>
      {props.children}
    </div>
  )
}

export default Alert;