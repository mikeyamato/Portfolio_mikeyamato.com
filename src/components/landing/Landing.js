import React, { Component } from 'react';
import { Divider, Visibility } from 'semantic-ui-react';
import TopImage from './TopImage';
import Portfolio from './Portfolio';

class Landing extends Component {
	render () {
		return (
			<div>
				<TopImage />
				<Divider horizontal>Portfolio</Divider>
				<Portfolio />
				<Divider horizontal>Contact</Divider>
			</div>
		);
	}
}

export default Landing;
