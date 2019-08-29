import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import itemsReducer from './reducers/itemsReducer';
import { configureStore } from 'redux-starter-kit';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const store = configureStore({
  reducer: itemsReducer
})

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store