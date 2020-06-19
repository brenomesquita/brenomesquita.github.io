import React, { Component } from 'react';
import { connect } from 'react-redux'
import { countAssignment } from '../actions/sum';


class Inputs extends Component {
  constructor(props){
  super(props)
  this.state={
    tarefa: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    this.setState({
      tarefa: value.target.value
    })
  }
  
  render() {
    return (
      <div>
        <input type='text' value={this.state.tarefa} onChange={this.handleChange} placeholder='digite...'></input>
        <button type='button' onClick={ () => this.props.add(this.state.tarefa) }>addicionar</button>
        {this.props.task.map(el=><p>{el.value}</p>)}
      </div>
    )
  }
}

const mapDispatchToProps =  dispatch => ({
  add: (value) => dispatch(countAssignment(value)),
})

const mapStateToProps =  props => ({
  task: props.sum.action
})

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)