import React from 'react';

const ItemName = ({ item }) => {
	return (
		<div key={item.id}> 
			<h4 className="ItemCardTitle text-center mb-0">{item.name}</h4>
		</div>
		)
}

export default ItemName;