//var React = require('react');
//var ReactDOM = require('react-dom');
//var Router = require('react-router');
//var Route = Router.Route;
//var DefaultRoute = Router.DefaultRoute;
//var hashHistory = Router.hashHistory

//var App = require('./components/App');
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/App'

render((
	<Router history={hashHistory}>
		<Route path="/" component={App} />
	</Router>
), document.getElementById('app'));


