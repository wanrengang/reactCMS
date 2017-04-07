import React, { Component } from 'react';
import { MyButton } from '../../components';
import ListStore from '../../stores/ListStore';
import ButtonActions from '../../actions/ButtonActions';

export default class flux extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	           //items: ListStore.getAll()
	           items:['fdsafasf']
	      };
	 }
	componentDidMount() {
	    	ListStore.addChangeListener(this._onChange);
	  }

	componentWillUnmount() {
		ListStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		this.setState({
		  items: ListStore.getAll()
		});
	}
	createNewItem(event) {
		ButtonActions.addNewItem('new item');
	}
	render() {	
		return (
		 <MyButton
	      items={this.state.items}
	      onClick={this.createNewItem}
	    />
		)
	}
}