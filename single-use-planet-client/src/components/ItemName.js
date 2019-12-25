import React from 'react';

const ItemName = ({ item }) => {
	return (
		<div key={item.id}> 
			<h5 className="ItemName">{item.name}</h5>
		</div>
		)
}

export default ItemName;