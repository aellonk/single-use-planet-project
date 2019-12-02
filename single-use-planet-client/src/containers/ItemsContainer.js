import React, { Component } from 'react';
import Items from '../components/Items';


class ItemsContainer extends React.Component {
	
	render() {
		return (
		<div>
		 	<h1>Items Container</h1>
			<Items/>
		</div>
		);
	}
	
}

export default ItemsContainer;