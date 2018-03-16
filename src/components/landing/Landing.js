import React, { Component } from 'react';
import { Grid, Divider, Visibility } from 'semantic-ui-react';
import TopImage from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ParallaxImg from './Parallax';

class Landing extends Component {
	render () {
		return (
			<div>
				<Grid>
					<Grid.Column width={1} />
					<Grid.Column width={14}>
						<Divider horizontal>parallax image</Divider>
						</Grid.Column>
					<Grid.Column width={1} />
				</Grid>
				<ParallaxImg />
				<Grid>
					<Grid.Column width={1} />
					<Grid.Column width={14}>
						<Divider horizontal>about</Divider>
					</Grid.Column>
					<Grid.Column width={1} />
				</Grid>
				<TopImage />
				<Grid>
					<Grid.Column width={1} />
					<Grid.Column width={14}>
						<Divider horizontal>portfolio</Divider>
					</Grid.Column>
					<Grid.Column width={1} />
				</Grid>
				<Portfolio />
				<Grid>
					<Grid.Column width={1} />
					<Grid.Column width={14}>
						<Divider horizontal>contact</Divider>
						</Grid.Column>
					<Grid.Column width={1} />
				</Grid>
				<Contact />
			</div>
		);
	}
}

export default Landing;
