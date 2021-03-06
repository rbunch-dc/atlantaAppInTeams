import React from 'react';
import MrBase from './MrBase';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import About from './About';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={About} />
		</Route>
	</Router>,
	document.getElementById('root')
);
