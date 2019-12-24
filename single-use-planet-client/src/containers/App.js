import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer';
import './App.css';
import About from '../components/About';
import Resources from '../components/Resources';
import ItemCard from '../components/ItemCard';
import NavBar from '../components/NavBar';
import	FeedbackForm from '../components/FeedbackForm';
import { Route, withRouter, Switch, Link} from 'react-router-dom'


class App extends Component {

	render() {
		return (
			<div> 
				<NavBar/>
				<Switch>
	              <Route exact path= '/items' component={ ItemsContainer }/>
	              <Route exact path= '/resources' component={ Resources }/>
	              <Route exact path= '/about' component={ About }/>
	              <Route exact path= '/feedback' component={ FeedbackForm }/>
	            </Switch>
			</div>
		)
	}
}

export default App;