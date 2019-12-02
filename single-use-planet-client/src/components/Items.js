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
	      searched: false,
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

	handleOnChange(e){
	    this.setState({
	      item: e.target.value,
	      searched: true
	    });
	    console.log(this.state.item);
  	}
  
  	renderAll() {
  		return (
  			<div>
			{this.props.items.map(item => (<div><Link to={`/items/${item.id}`} key={item.id} onClick={(e) => this.handleClick(e, item) }>
					<ItemName key={item.id} item={item} />
				</Link> 
				</div>
				)
			)
			}
			</div>
  		)
  	}

  	renderSearchedList(){
	    return this.props.items.filter(item =>
	        item.name.toString().toLowerCase().includes(this.state.item.toString().toLowerCase())).map(searchedItems => {
	          return(
	            <div key={searchedItems.name}>
	            <Link to={`/items/${searchedItems.id}`} key={searchedItems.id} onClick={(e) => this.handleClick(e, searchedItems) }>
	              <ItemName key={searchedItems.id} item={searchedItems} />
	              </Link>
	            </div>
	          );

	        })
    }


	render() {
		return (
		<div>
		<input type="text" value={this.state.input} placeholder={"Search for an Item"} onChange={this.handleOnChange.bind(this)} />
			<h3>What To Do With:</h3>
			{this.state.searched ? this.renderSearchedList() : this.renderAll()}
			{this.state.clicked ? <ItemCard item={this.state.item}/> : null}
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