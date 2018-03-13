import React, { Component } from 'react';
import { Divider, Visibility } from 'semantic-ui-react';
import TopImage from './TopImage';
import Portfolio from './Portfolio';

class Landing extends Component {
	render () {
		return (
			<div>
				<TopImage />
				<Divider horizontal>portfolio</Divider>
				<Portfolio />
				<Divider horizontal>contact</Divider>
			</div>
		);
	}
}

export default Landing;
