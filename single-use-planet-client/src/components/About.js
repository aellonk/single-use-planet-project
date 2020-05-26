import React from 'react';
import bins from '../images/Pawel_czerwinski_RkIsyD_AVvc_unsplash.jpg'; 


const About = ()=> (
			<div className="container-fluid mt-5">
				<div className="row">
				<div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 mt-4 ml-4 mr-4" > 
					<h3>SINGLE-USE PLANET helps people figure out what to do with the things that no longer serve them. It offers alternatives to sending things to landfills because let’s face it - when we throw things away there actually is no "away."</h3>
				</div>
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4 mr-3">
					<img className="homepageImage" src={bins} alt=""/>
				</div>
				</div>
			</div>
)

export default About;

