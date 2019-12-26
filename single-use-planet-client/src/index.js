import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk';
import './index.css';
import itemsReducer from './reducers/itemsReducer';
// import { configureStore } from 'redux-starter-kit';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(itemsReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
	<Router>
		<Provider store={store}>	
			<App/>
		</Provider>
	</Router>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// export default store