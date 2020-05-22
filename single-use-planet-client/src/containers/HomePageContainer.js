import React from 'react';
import About from '../components/About'
import TerraCycle_Logo_Low_Res from '../images/TerraCycle_Logo_Low_Res.png'


 const HomePageContainer = () => {

		return (
		<div>
		  
		  <About/>

			<div className="container marketing">
			    <div className="row">
			      <div className="col-lg-4 text-center featurette">
			        <img src="https://source.unsplash.com/mWTOR3Rx8l8/" className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt=""/>
			        <h2>Recycle Electronics</h2>
			        <p>Lots of items fall into this category including alarm clocks; CD/DVD players and game consoles; small kitchen appliances such as kettles, toasters and blenders; personal grooming products like hairdryers, straighteners, electric toothbrushes and shavers; other items such as lamps, flashlights, vacuum cleaners, phones, radios, TVs, printers, cameras, and smoke alarms.</p>
			        <p><button className="btn btn-secondary">Learn more &raquo;</button></p>
			      </div>
			      <div className="col-lg-4 text-center featurette">
			        <img src={TerraCycle_Logo_Low_Res} className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt="TerraCycle Logo"/>
			        <h2>Check out TerraCycle</h2>
			        <p>TerraCycle offers a range of national, easy-to-use recycling platforms allowing everyone to #RecycleEverything, as well as Loop, a sustainable shopping experience moving the world away from single-use packaging.</p>
			        <p><a className="btn btn-secondary" href="https://www.terracycle.com/en-US" target="_blank" rel="noopener noreferrer" role="button">Learn more &raquo;</a></p>
			      </div>
			      <div className="col-lg-4 text-center featurette">
			        <img src="https://source.unsplash.com/pc00EDmxodI/" className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt=""/>
			        <h2>Recycle Christmas Trees</h2>
			        <p>Wrap up your holiday season and say goodbye to your tree at Mulchfest. NYC Parks and the New York City Department of Sanitation will chop your tree into wood chips that they'll use to nourish trees and make NYC even greener.</p>
			        <p><button className="btn btn-secondary">Learn more &raquo;</button></p>
			      </div>
			    </div>


			    
			  </div>
		</div>

		);
}

export default HomePageContainer;