import React, { Component } from 'react';
import { MyUI,Person } from '../../components';

export default class MyTest extends Component {
	state = {
		val:14007,
		name:'用000户名'
	}

	handleClick(e){
		console.log(e)
		this.setState({name: e});
    }

	render() {	
		return (
		  <div>       
		    <MyUI data="99" id={this.state.val}  />
		     <Person name={this.state.name} callbackParent={e=>this.handleClick(e)}/>
		  
		  </div>
		)
	}
}