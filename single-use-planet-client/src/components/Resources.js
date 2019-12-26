import React from 'react'

const Resources = () => {

	return (
		<div className="container-fluid">
			<h1 className="text-center mt-4">Zero Waste Resources</h1>
			<h3 className="mt-5">GrowNYC Food Scrap Drop-Off Locations</h3>
			<h6>NYC residents can compost household food waste by simply dropping kitchen scraps at one of 70 GrowNYC Food Scrap Drop-off sites citywide. Find a drop-off location using the map below, and find out more at <a href="https://www.grownyc.org/compost/locations" target="_blank" rel="noopener noreferrer">GrowNYC's compost page</a>.</h6>
			<iframe title="GrowNYC Food Scrap Drop-Off Locations" src="https://www.google.com/maps/d/embed?mid=1c2Dv882CW6Fosx5jj9u7fLQRJkg" width="640" height="480"></iframe>
			<h3 className="mt-5">GrowNYC Stop 'N' Swaps</h3>
			<h6>Stop 'N' Swaps are free events where people can find new homes for unwanted items (like clothes, books, shoes, toys, housewares) or take items they can use. For more information, visit <a href="https://www.grownyc.org/swap" target="_blank" rel="noopener noreferrer">GrowNYC's Stop 'N' Swap® page</a>.</h6>
			<iframe title="GrowNYC Stop 'N' Swaps" src="https://www.google.com/maps/d/embed?mid=1L81oStebJpcUHN5kPzzXDYnr0p409wxb" width="640" height="480"></iframe>
		</div>
		)
}


export default Resources;