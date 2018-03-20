import React, { Component } from 'react';
import './common.css';

import {
  Segment,
} from 'semantic-ui-react';


class Footer extends Component {
	render () {
		return (
			



			<Segment attached inverted className='footer-container'>
				<p className='footer-text'>© 2018 Mike Yamato</p>
			</Segment>
		);
	}
}

export default Footer;

