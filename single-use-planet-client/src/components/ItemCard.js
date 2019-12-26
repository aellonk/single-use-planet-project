import React from 'react';

const ItemCard = ({item}) => {

return (
	<div>
	<div key={item.id}> 
		<h1 className="ItemCardTitle text-center">{item.name}</h1>
		<div className="row m-4">
		<div className="col-5">
		<img className="ItemCardImg" src={item.img_url} alt={item.name}/>
		</div>
		<div className="col-7">
		<p><b>Material</b>: {item.material}</p>
		<p><b>Alternative Options</b>: {item.alternative}</p>
		<p><b>How To Recycle</b>: {item.instructions}</p>
		</div>
		</div>
	</div>
	</div>
	)
}

export default ItemCard;