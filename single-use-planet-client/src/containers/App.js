import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer';
import './App.css';
import About from '../components/About';
import Helpers from '../components/Helpers';
import ItemCard from '../components/ItemCard';
import NavBar from '../components/NavBar';
import	FeedbackForm from '../components/FeedbackForm';
import { Route, withRouter, Switch, Link} from 'react-router-dom'


class App extends Component {

	render() {
		return (
			<div> 
				App Container
				<NavBar/>
				<Switch>
	              <Route exact path= '/items' component={ ItemsContainer }/>
	              <Route exact path= '/helpers' component={ Helpers }/>
	              <Route exact path= '/about' component={ About }/>
	              <Route exact path= '/feedback' component={ FeedbackForm }/>
	            </Switch>
			</div>
		)
	}
}

export default App;