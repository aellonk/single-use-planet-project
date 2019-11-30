import React, { Component } from 'react';

import { getItems } from '../actions/items';
import	Items from '../containers/Items';
import SearchInput from '../components/SearchInput';


class VisibleItems extends Component {

	constructor() {
	    super()
	    this.state = {
	      items: [],
	      filteredItems: []
	  	}
	}	

	filterItems = (itemFilter) => {
	    let filteredItems = this.props.items.filter((item) => {
	      console.log(item.name)
	    })
	    this.setState({
	      filteredItems
	    })
  	}
	
	render() {
		return (

		<div>
			<SearchInput/>
		<Items items={this.state.filteredItems} match={this.props.match} onChange={this.filteredItems}/>
		</div>
		);
	}
	
}

const mapStateToProps = (state) => {
	return ({
		items: state.items
	})
}


export default VisibleItems;