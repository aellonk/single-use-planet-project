import React from 'react';

const ItemName = ({ item }) => {
	return (
			<li key={item.id}> 
				<h1 className="ItemName">{item.name}</h1>
			</li>
		)
}

export default ItemName;