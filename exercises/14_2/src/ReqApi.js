import React, { Component } from 'react'

export default class ReqApi extends Component {
  constructor(props){
    super(props)

    this.state = {
      shoulRender : "",
      name: "",
      array: [],
    }
    this.chamando = this.chamando.bind(this)
  }

  componentDidMount(){
    this.chamando();
    console.log("didmount")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldUpdate", nextProps)
    return true
  }

  componentDidUpdate(prevProps, prevState){
    console.log("didUpdate", prevProps)
  }

  chamando(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp=>resp.json())
    .then(el=>this.setState({shoulRender: el}))
  }

  render() {
    if (this.state.shoulRender === "") return "loading...";
    return (
      <div>
        <button onClick={()=>this.chamando()}>dog</button>
        <img src={this.state.shoulRender.message} />
      </div>
    )
  }
}
