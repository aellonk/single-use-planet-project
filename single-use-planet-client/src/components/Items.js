import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import ItemName from '../components/ItemName';
import ItemCard from '../components/ItemCard';
import { getItems } from '../actions/items';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

class Items extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      searched: false,
	      clicked: false,
		  item: '',
		  open: false
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
  	}
  
  	renderAll() {
  		return (
  			<div className="col-12">
			{this.props.items.map(item => (
				<>
					<Button
						onClick={() => this.setState({ open: !this.state.open })}
						aria-controls="example-collapse-text"
						aria-expanded={this.state.open}
					>
						<Link to={`/items/${item.id}`} key={item.id} onClick={(e) => this.handleClick(e, item) }>
							<ItemName key={item.id} item={item} />
						</Link> 
					</Button>
					<Collapse in={this.state.open}>
						<div id="example-collapse-text">
							{this.state.clicked ? <ItemCard item={this.state.item}/> : null}
						</div>
					</Collapse>
				</>




				
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
	            <div key={searchedItems.name} className="col-12">
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
		<div className="searchbox col-5 mx-auto">
		<label htmlFor="search-by">
			<i className="fas fa-search"></i>
		</label>
		<input id="searchfocus" type="text" value={this.state.input} placeholder={"Find an Item"} onChange={this.handleOnChange.bind(this)} />
		</div>
		<div className="row mt-4">
			
			{this.state.searched ? this.renderSearchedList() : this.renderAll()}

					
					
		</div>
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



