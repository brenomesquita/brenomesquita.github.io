import React from 'react'
import { connect } from 'react-redux'
import { addAssignment } from '../actions/counter'

const Button = (props) => (
  <button onClick={() => props.add()}>clique</button>
)

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addAssignment()),
})

export default connect(null, mapDispatchToProps)(Button)