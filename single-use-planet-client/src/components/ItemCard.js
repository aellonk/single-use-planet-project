import React from 'react';

const ItemCard = ({ item }) => (
			<div key={item.id}> 
				<h1 class="ItemCardTitle">{item.name}</h1>
				<img class="ItemCardImg"src={item.img_url} alt={item.name}/>
				<p>Material: {item.material}</p>
				<p>Alternative Options: {item.alternative}</p>
				<p>How To Recycle: {item.instructions}</p>
			</div>
)

export default ItemCard;