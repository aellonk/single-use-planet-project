import React from 'react';

const ItemName = ({ item }) => (
			<div key={item.id}> 
				<h1 className="ItemName">{item.name}</h1>
			</div>
)

export default ItemName;