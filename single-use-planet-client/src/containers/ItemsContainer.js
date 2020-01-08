import React, { Component } from 'react';
import Items from '../components/Items';


class ItemsContainer extends Component {
	
	render() {
		return (
		<div className="container-fluid">
		 	<h1 className="text-center mt-4">What To Do With...</h1>
			<Items/>
		</div>
		);
	}
	
}

export default ItemsContainer;