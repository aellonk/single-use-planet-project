import React from 'react';

const ItemCard = ({item}) => {

return (
	<div>
	<li key={item.id}> 
		<h1 className="ItemCardTitle">{item.name}</h1>
		<img className="ItemCardImg" src={item.img_url} alt={item.name}/>
		<p>Material: {item.material}</p>
		<p>Alternative Options: {item.alternative}</p>
		<p>How To Recycle: {item.instructions}</p>
	</li>
	</div>
	)
}

export default ItemCard;