import React, { Component } from 'react';
import SearchInput from '../components/SearchInput';
import Items from '../components/Items';

class ItemsContainer extends React.Component {
	
	render() {
		return (
		<div>
		 	<h1>Items Container</h1>
		 	<SearchInput />
			<Items />
		</div>
		);
	}
	
}

export default ItemsContainer;