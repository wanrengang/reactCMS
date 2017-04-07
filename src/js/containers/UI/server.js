import React, { Component,DOM } from 'react';


class ServerDemo extends Component{
  constructor(props){
      //console.log("constructor");
      super(props);
      this.state = {
        items: [],
        disabled: true
      };
      
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.setState({disabled: false})
  }
  handleClick() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length)
    })
  }
  render() {
    console.log('render')
    return (
      <div>
      <button onClick={()=>this.handleClick()}>点击</button>
      <ul>
          {this.state.items.map(function(item,index) {
            return <li key={index}>{item}</li>
          })}
      </ul>
      </div>
    )
  }
}
export default ServerDemo
