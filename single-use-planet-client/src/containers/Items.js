import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from '../components/ItemCard'

class Items extends Component {

		componentDidMount() {
		this.props.dispatch({
			type: 'GET_ITEMS_SUCCESS',
			items: [ {name: "test", img_url:"test", alternative: "use less", material: "paper", instructions: "test"}]
		})
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


export default connect(mapStateToProps)(Items);