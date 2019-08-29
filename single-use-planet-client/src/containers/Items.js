import React from 'react';
import ItemCard from '../components/ItemCard'

const Items = (props) => (
	<div>
		<h3>What To Do With:</h3>
		{props.items.map(item => <ItemCard key={item.id} item={item} />)}
	</div>
)

export default Items;