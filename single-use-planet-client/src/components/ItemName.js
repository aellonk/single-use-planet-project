import React from 'react';

const ItemName = ({ item }) => {
	return (
			<div key={item.id}> 
				<h1 className="ItemName">{item.name}</h1>
			</div>
		)
}

export default ItemName;