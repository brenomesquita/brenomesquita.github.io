import React, { Component } from 'react'
import { BrowserRouter , Link, Route } from 'react-router-dom';

export default class LinksHeader extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
      </div>
    )
  }
}
