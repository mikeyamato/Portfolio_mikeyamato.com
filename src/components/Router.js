import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import Footer from './common/Footer';
import Header from './common/Header';


class Router extends Component {


	render() {


		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path='/' component={Landing} />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}

}

export default Router;
