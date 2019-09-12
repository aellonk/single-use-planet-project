import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import ItemName from '../components/ItemName';
import ItemCard from '../components/ItemCard';
import { getItems } from '../actions/items';
import SearchInput from '../components/SearchInput';


class Items extends Component {

	componentDidMount() {
		this.props.getItems()
	}

	handleOnClick = event => {
		event.preventDefault();
		return <ItemCard key={item.id} item={item} />
	}
	
	render() {
		
		return (
		<div>
			<SearchInput/>
			<h1>{this.props.items.filter(item => item.name.includes(SearchInput.input))}</h1>
			<h3>What To Do With:</h3>

			{this.props.items.map(item => (<Link to={`/items/${item.id}`} onClick={return (<ItemCard key={item.id} item={item} />)} ><ItemName key={item.id} item={item} /></Link>) )}
		</div>
		);
	}
	
}

const mapStateToProps = (state) => {
	return ({
		items: state.items
	})
}


export default connect(mapStateToProps, { getItems })(Items);