import React from 'react'
import TerraCycle_Logo_Low_Res from '../images/TerraCycle_Logo_Low_Res.png'


const Resources = () => {

	return (
		<div className="container-fluid mt-5 mx-auto col-8 mb-5">
			<h2 className="text-center mt-4 mb-4">Zero Waste Resources</h2>
			<div className="text-center pt-4">
			        <img src={TerraCycle_Logo_Low_Res} className="bd-placeholder-img-lg featurette-image img-fluid mx-auto feat-2" alt="TerraCycle Logo"/>
			        <p class="pt-3">TerraCycle offers a range of national, easy-to-use recycling platforms allowing everyone to #RecycleEverything, as well as Loop, a sustainable shopping experience moving the world away from single-use packaging.</p>
			        <p><a className="btn btn-secondary" href="https://www.terracycle.com/en-US" target="_blank" rel="noopener noreferrer" role="button">Check out TerraCycle &raquo;</a></p>
			      </div>
			<h4 className="mt-5 text-center">GrowNYC Food Scrap Drop-Off Locations</h4>
			<p className="text-center pb-3 pt-1">NYC residents can compost household food waste by simply dropping kitchen scraps at one of 70 GrowNYC Food Scrap Drop-off sites citywide. Find a drop-off location using the map below, and find out more at <a href="https://www.grownyc.org/compost/locations" target="_blank" rel="noopener noreferrer">GrowNYC's compost page</a>.</p>
			<iframe title="GrowNYC Food Scrap Drop-Off Locations" src="https://www.google.com/maps/d/embed?mid=1c2Dv882CW6Fosx5jj9u7fLQRJkg" width="640" height="480"></iframe>
			<h4 className="mt-5 text-center">GrowNYC Stop 'N' Swaps</h4>
			<p className="text-center pb-3 pt-1">Stop 'N' Swaps are free events where people can find new homes for unwanted items (like clothes, books, shoes, toys, housewares) or take items they can use. For more information, visit <a href="https://www.grownyc.org/swap" target="_blank" rel="noopener noreferrer">GrowNYC's Stop 'N' Swap® page</a>.</p>
			<iframe title="GrowNYC Stop 'N' Swaps" src="https://www.google.com/maps/d/embed?mid=1L81oStebJpcUHN5kPzzXDYnr0p409wxb" width="640" height="480"></iframe>
		</div>
		)
}


export default Resources;