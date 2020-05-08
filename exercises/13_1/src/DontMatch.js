import React, { Component } from 'react'
import LinksHeader from './LinksHeader'

export default class DontMatch extends Component {
  render() {
    return (
      <div>
        <LinksHeader />
        <h1>PAGE NOT FOUND</h1>
      </div>
    )
  }
}
