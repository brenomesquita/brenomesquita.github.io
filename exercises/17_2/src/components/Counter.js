import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ test }) => (
  <div>
    {test}
  </div>
)

const mapStateToProps = (props) => {
  return{
    test: props.index.count
  }
}

export default connect(mapStateToProps)(Counter)