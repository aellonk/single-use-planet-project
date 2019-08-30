import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from '../components/ItemCard';
import { getItems } from '../actions/items';


class Items extends Component {

	componentDidMount() {
		this.props.getItems()
	}
	
	render() {
		return (

		<div>
			<h3>What To Do With:</h3>

			{this.props.items.map(item => <ItemCard key={item.id} item={item} />)}
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