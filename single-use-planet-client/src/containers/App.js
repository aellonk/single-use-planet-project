import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer';
import './App.css';
import About from '../components/About'
import ItemCard from '../components/ItemCard'
import NavBar from '../components/NavBar'
import { Route, withRouter, Switch, Link} from 'react-router-dom'


class App extends Component {

	render() {
		return (
			<div> 
				App Container
				<NavBar/>
				<Switch>
	              <Route exact path= '/items' component={ ItemsContainer }/>
	              <Route exact path= '/about' component={ About }/>
	            </Switch>
			</div>
		)
	}
}

export default App;