import React, { Component } from 'react';
import { SuperContext } from './SuperContext';

export class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOne: 0,
      numtwo: 0,
      numtree: 0,
    }
    this.sum1 = this.sum1.bind(this);
    this.sum2 = this.sum2.bind(this);
  }
  sum1(value) {
    this.setState({numOne:value.target.value})
  }
  sum2(value) {
    this.setState({numtwo:value.target.value})
  }
  render() {
    const contextValue = {
      numOne: this.state.numOne,
      sum1: this.sum1,
      numtwo: this.state.numtwo,
      sum2: this.sum2,
    };

    return (
      <SuperContext.Provider value={contextValue}>
        {this.props.children}
      </SuperContext.Provider>
    )
  }
}
