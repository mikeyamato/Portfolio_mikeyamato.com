import React, { Component } from 'react';

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
			<Container>
				<p>© 2018 Mike Yamato</p>
			</Container>
		);
	}
}

export default Footer;
