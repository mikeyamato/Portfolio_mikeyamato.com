import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
	Header, 
	Container, 
	Image,
	Segment,
	Grid
} from 'semantic-ui-react';
import './landing.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Parallax, Background } from 'react-parallax';



// anchor link not working

class About extends Component {


	render() {

		return (

			<Parallax strength={300}>
				<div style={{ height: 'auto' }} className='about-text'>
					Hello
					<p>
						大和慎輔
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</div>
				<Background>
					<img src="//i.imgur.com/4o9FSOP.jpg" alt="ramen" className='parallax-image'/>
				</Background>

					

			</Parallax>
		);
	}
}

export default About;



// <Container fluid className='about-image'>
// 					<Grid>
// 						<Grid.Column width={4}/>
// 							<ScrollableAnchor id={'about'}>
// 						<Grid.Column width={8}>
// 							<Segment>
// 							<Header as='h2' color='white'>
// 								<Header.Content className='top-image-text'>
// 									Hello
// 								<p>
// 									大和慎輔
// 									<br />
// 									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// 								</p>
// 								</Header.Content>
// 							</Header>
// 							</Segment>
// 						</Grid.Column>
// 							</ScrollableAnchor>
// 						<Grid.Column width={4}/>
// 					</Grid>

// 			</Container>
