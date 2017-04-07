import React, { Component } from 'react'
import { MyUI } from '../../components'
import { Person } from '../../components'
export default class MyTest extends Component {
	state = {
		val:147
	}
	handleClick(e){
		console.log(e)
		this.setState({
			val:e
		})
		
	}
	render() {	
		return (
		  <div>       
		    <MyUI data="99" id={this.state.val}  />


		   
		  </div>
		)
	}
}