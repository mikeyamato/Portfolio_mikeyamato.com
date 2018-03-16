import React, { Component } from 'react';
import './common.css';

import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Visibility,
  Transition
} from 'semantic-ui-react';


class Footer extends Component {
	render () {
		return (
			



			<Segment inverted className='footer-container'>
				<Container>
				<p className='footer-text'>© 2018 Mike Yamato</p>
				</Container>
			</Segment>
		);
	}
}

export default Footer;

// <Segment inverted className='footer-container'>
//				<Container>
//				<p className='footer-text'>© 2018 Mike Yamato</p>
				// </Container>
			// </Segment>
