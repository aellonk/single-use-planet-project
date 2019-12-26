import React, { Component } from 'react';
import Items from '../components/Items';
import TerraCycle_Logo_Low_Res from '../images/TerraCycle_Logo_Low_Res.png'


class HomePageContainer extends React.Component {
	
	render() {
		return (
		<div>
		  <div id="myCarousel" className="carousel slide mb-5" data-ride="carousel">
		    <ol className="carousel-indicators">
		      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
		      <li data-target="#myCarousel" data-slide-to="1"></li>
		      <li data-target="#myCarousel" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner">
		      <div className="carousel-item active">
		      <div className="active item one"></div>
		        <div className="container">
		          <div className="carousel-caption text-left">
		            <h1>What to do with _____</h1>
		            <p>Not sure if you can recycle that? Find out here.</p>
		            <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse Items</a></p>
		          </div>
		        </div>
		      </div>
		      <div className="carousel-item">
		      <div className="item two"></div>
		        <div className="container">
		          <div className="carousel-caption text-left">
		            <h1>Resources</h1>
		            <p>Find helpful tools and local businesses that support waste diversion.</p>
		            <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
		          </div>
		        </div>
		      </div>
		      <div className="carousel-item">
		     <div className="item three"></div>
		        <div className="container">
		          <div className="carousel-caption text-left">
		            <h1>Events</h1>
		            <p>Workshops and discussions to help you repair your items and live sustainably.</p>
		            <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse Events</a></p>
		          </div>
		        </div>
		      </div>
		    </div>
		    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
		      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		      <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
		      <span className="carousel-control-next-icon" aria-hidden="true"></span>
		      <span className="sr-only">Next</span>
		    </a>
  		  </div>



			<div className="container marketing">
			    <div className="row">
			      <div className="col-lg-4 text-center featurette">
			        <img src="https://source.unsplash.com/mWTOR3Rx8l8/" className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
			        <h2>Recycle Electronics</h2>
			        <p>Lots of items fall into this category including alarm clocks; CD/DVD players and game consoles; small kitchen appliances such as kettles, toasters and blenders; personal grooming products like hairdryers, straighteners, electric toothbrushes and shavers; other items such as lamps, flashlights, vacuum cleaners, phones, radios, TVs, printers, cameras, and smoke alarms.</p>
			        <p><a className="btn btn-secondary" href="#" role="button">Learn more &raquo;</a></p>
			      </div>
			      <div className="col-lg-4 text-center featurette">
			        <img src={TerraCycle_Logo_Low_Res} className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
			        <h2>Check out TerraCycle</h2>
			        <p>TerraCycle offers a range of national, easy-to-use recycling platforms allowing everyone to #RecycleEverything, as well as Loop, a sustainable shopping experience moving the world away from single-use packaging.</p>
			        <p><a className="btn btn-secondary" href="https://www.terracycle.com/en-US" target="_blank" rel="noopener noreferrer" role="button">Learn more &raquo;</a></p>
			      </div>
			      <div className="col-lg-4 text-center featurette">
			        <img src="https://source.unsplash.com/pc00EDmxodI/" className="bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
			        <h2>Recycle Christmas Trees</h2>
			        <p>Wrap up your holiday season and say goodbye to your tree at Mulchfest. NYC Parks and the New York City Department of Sanitation will chop your tree into wood chips that they'll use to nourish trees and make NYC even greener.</p>
			        <p><a className="btn btn-secondary" href="#" role="button">Learn more &raquo;</a></p>
			      </div>
			    </div>


			    
			  </div>
		</div>

		);
	}
	
}

export default HomePageContainer;