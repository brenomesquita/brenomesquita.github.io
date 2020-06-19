import React from 'react';
import { connect } from 'react-redux';

const Resultado = ({ test }) => (
  <div>
    resultado: {test}
  </div>
)

const mapStateToProps = (props) => {
  return{
    test: props.sum
  }
}

export default connect(mapStateToProps)(Resultado)
