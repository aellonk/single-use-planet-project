import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemName from '../components/ItemName';
import ItemCard from '../components/ItemCard';
import { getItems } from '../actions/items';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class Items extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      searched: false,
		  item: '',
		  open: false
	    };
  	}

	componentDidMount() {
		this.props.getItems()
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
				<Accordion defaultActiveKey="0">
					<Card>
						<Accordion.Toggle as={Card.Header} eventKey={item.id}>
							<ItemName key={item.id} item={item}/>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey={item.id}>
							<Card.Body><ItemCard item={item}/></Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				)
			)
			}
			</div>
  		)
  	}

  	renderSearchedList(){
	    return this.props.items.filter(item =>
	        item.name.toString().toLowerCase().includes(this.state.item.toString().toLowerCase())).map(searchedItem => {
	          return(
					<div key={searchedItem.name} className="col-12">
					<Accordion defaultActiveKey="0">
						<Card>
							<Accordion.Toggle as={Card.Header} eventKey={searchedItem.id}>
								<ItemName key={searchedItem.id} item={searchedItem} />
							</Accordion.Toggle>
							<Accordion.Collapse eventKey={searchedItem.id}>
								<Card.Body><ItemCard item={searchedItem}/></Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
					</div>
	  	   		);
	    	})
    }


	render() {
		return (
		<div>
		<div className="searchbox col-xl-5 col-lg-5 col-md-5 col-sm-12 mx-auto p-3">
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



