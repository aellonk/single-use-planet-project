import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddItemForm = ({ name, material, alternative, instructions, img_url }) => {
  
	const handleChange = event => {
	    this.setState({
	      [event.target.name]: event.target.value
	    });
  	};

  	handleSubmit = event => {
	  	event.preventDefault();
	  	this.props.addItem(this.state);
	}

	  render() {
	   return(
	    <div>
	    <Container>
	    <h1 className="mt-5">Add Item</h1>
	    <Form onSubmit={this.handleSubmit}>
  			<Form.Group controlId="formName" >
	          <Form.Label>Item Name - What do you call this thing in layman's terms? </Form.Label>
	          <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
	    	</Form.Group>
	     	<Form.Group controlId="formMaterial" >
	          <Form.Label>Material - Let's get technical. What's this item made of?</Form.Label>
	          <Form.Control type="text" name="material" value={this.state.material} onChange={this.handleChange}/>
	    	</Form.Group>
	     	<Form.Group controlId="formAlternative" >
	          <Form.Label>Alternative to Landfills and Recycling - How can this item be reused?</Form.Label>
	          <Form.Control type="text" name="alternative" value={this.state.alternative} onChange={this.handleChange}/>
	    	</Form.Group>
			<Form.Group controlId="formInstructions" >
	          <Form.Label>Instructions for Recycling - for when you can't find any way to reuse the item</Form.Label>
	          <Form.Control type="text" name="instructions" value={this.state.instructions} onChange={this.handleChange}/>
	    	</Form.Group>
	       	<Form.Group controlId="formImage" >
	          <Form.Label>Image - Link to a photo of the item</Form.Label>
	          <Form.Control type="text" name="img_url" value={this.state.img_url} onChange={this.handleChange}/>
	        </Form.Group>
	        <Button type="submit">Submit</Button>
	      </Form>
	      </Container>
	    </div>
	  );
	}
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: formData => dispatch({ type: 'ADD_ITEM', payload: formData })
  }
}


export default connect(
  null,
  mapDispatchToProps
)(AddItemForm);