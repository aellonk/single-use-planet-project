import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom'
import ItemName from '../components/ItemName';
import ItemCard from '../components/ItemCard';
import { getItems } from '../actions/items';



class Items extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      clicked: false,
	      item: ''
	    };
  	}

	componentDidMount() {
		this.props.getItems()
	}
	
	handleClick = (e, item) => {
		e.preventDefault();
		this.setState({clicked: true, item: item})
	}


	render() {
		return (
		<div>
			<h3>What To Do With:</h3>
			<ul>
			{this.props.items.map(item => (<div><Link to={`/items/${item.id}`} key={item.id} onClick={(e) => this.handleClick(e, item) }>
					<ItemName key={item.id} item={item} />
				</Link> 
				</div>
				)
			)
			}
			{this.state.clicked ? <ItemCard item={this.state.item}/> : null}
			</ul>
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