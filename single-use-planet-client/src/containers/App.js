import React, { Component } from 'react';
import ItemsContainer from './ItemsContainer';
import HomePageContainer from './HomePageContainer';
import './App.css';
import About from '../components/About';
import Resources from '../components/Resources';
import NavBar from '../components/NavBar';
import AddItemForm from '../components/AddItemForm';
import	ItemAdded from '../components/ItemAdded';
import { Route, Switch} from 'react-router-dom'


class App extends Component {

	render() {
		return (
			<div> 
				<NavBar/>
				<Switch>
				  <Route exact path= '/' component={ HomePageContainer }/>
	              <Route exact path= '/items' component={ ItemsContainer }/>
	              <Route exact path= '/resources' component={ Resources }/>
	              <Route exact path= '/items/new' component={ AddItemForm } />
				  <Route exact path= '/items/:id' component={ ItemAdded } />
	            </Switch>
			</div>
		)
	}
}

export default App;