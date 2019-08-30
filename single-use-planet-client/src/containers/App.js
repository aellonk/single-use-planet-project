import React, { Component } from 'react';
import Items from './Items';
import SearchInput from '../components/SearchInput';
import './App.css';



class App extends Component {

	render() {
		return (
			<div> 
				App Container
				<SearchInput />
				<Items />
			</div>
		)
	}
}

export default App;