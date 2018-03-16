import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import Footer from './common/Footer';
import Header from './common/Header';
// import { removeHash } from 'react-scrollable-anchor';

class Router extends Component {
	

	render() {

		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route path='/' component={Landing} />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}
// removeHash();


export default Router;
