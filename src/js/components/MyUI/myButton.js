import React, { Component } from 'react'
class MyButton extends Component {
   render() {
     const { items } = this.props
      const itemHtml = items.map(function (listItem, i) {
        return <li key={i}>{listItem}</li>;
      })
    return(
      <div>
        <ul>{itemHtml}</ul>
        <button onClick={props.onClick}>New Item</button>
      </div>
    )}
    
}



export default MyButton
