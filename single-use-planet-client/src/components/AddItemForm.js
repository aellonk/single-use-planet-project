import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { updateAddItemForm } from '../actions/addItemForm'
import { createItem } from '../actions/items'

const AddItemForm = ({ name, material, alternative, instructions, img_url, updateAddItemForm, history, createItem }) => {

	const handleChange = event => {
		const { name, value } = event.target
	    updateAddItemForm(name, value)
  	};

  	const handleSubmit = event => {
	  	event.preventDefault();
	  	createItem({
	  		name, 
		 	material, 
		 	alternative, 
		 	instructions, 
		 	img_url
		}, history)
	}

	   return(
	    <div>
	    <Container>
	    <h1 className="mt-5">Add Item</h1>
	    <Form onSubmit={handleSubmit}>
  			<Form.Group controlId="formName" >
	          <Form.Label>Item Name - What do you call this thing in layman's terms? </Form.Label>
	          <Form.Control 
	          		type="text" 
	          		name="name" 
	          		onChange={handleChange}
	          		value={name}
	          		/>
	    	</Form.Group>
	     	<Form.Group controlId="formMaterial" >
	          <Form.Label>Material - Let's get technical. What's this item made of?</Form.Label>
	          <Form.Control 
	          		type="text" 
	          		name="material" 
	          		onChange={handleChange}
	          		value={material}
	          		/>
	    	</Form.Group>
	     	<Form.Group controlId="formAlternative" >
	          <Form.Label>Alternative to Landfills and Recycling - How can this item be reused?</Form.Label>
	          <Form.Control 
	          		type="text" 
	          		 name="alternative" 
	          		 onChange={handleChange}
	          		 value={alternative}
	          		/>
	    	</Form.Group>
			<Form.Group controlId="formInstructions" >
	          <Form.Label>Instructions for Recycling - for when you can't find any way to reuse the item</Form.Label>
	          <Form.Control 
	          		type="text" 
	          		 name="instructions" 
	          		 onChange={handleChange}
	          		 value={instructions}
	          		 />
	    	</Form.Group>
	       	<Form.Group controlId="formImage" >
	          <Form.Label>Image - Link to a photo of the item</Form.Label>
	          <Form.Control 
	          		type="text" 
	          		 name="img_url" 
	          		 onChange={handleChange}
	          		 value={img_url}
	          		 />
	        </Form.Group>
	        <Button type="submit">Add Item</Button>
	      </Form>
	      </Container>
	    </div>
	  );
}

const mapStateToProps = state => {
	const { name, material, alternative, instructions, img_url } = state.addItemForm
	return {
		 name, 
		 material, 
		 alternative, 
		 instructions, 
		 img_url
	}
}


export default connect(mapStateToProps, { updateAddItemForm, createItem })(AddItemForm);


