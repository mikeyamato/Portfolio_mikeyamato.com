import React, { Component } from 'react';
import { Grid, List, Label, Tab, Image, Item, Menu, Container, Segment, Rail } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './landing.css';


const panes = [
	{ menuItem: 'Groupr', 
		render: () => 
		<Tab.Pane>
			<Item.Group>
				<Item>
					<a href='//www.groupr.tech/' target='_blank' rel='noopener noreferrer'>
						<Item.Image size='large' src='//i.imgur.com/PpcTFWh.png' />
					</a>
					<Item.Content>
						<Item.Header>Groupr</Item.Header>
						<Item.Meta>Desktop app</Item.Meta>
						<Item.Description>
						Grouper connects the technology companies with technical talent in your area. We understand that the hiring process can be difficult not only for recruiters, but also the candidates. We want to help engineers find amazing jobs, and help recruiters connect with candidates based on their technical abilities rather than their resume credentials. Every attendee has passed a rigorous coding challenge that is objective and standardized, which provides recruiters that all attendees have a strong baseline understanding of technology.
						</Item.Description>
						{/* <Item.Extra>Desktop app</Item.Extra> */}
					</Item.Content>
				</Item>
			</Item.Group>
		</Tab.Pane> 
	},
	{ menuItem: 'Argo', 
		render: () => 
		<Tab.Pane>
		<Item.Group>
				<Item>
					<a href='//github.com/ARKrew/workingArgo' target='_blank' rel='noopener noreferrer'>
						<Item.Image size='50%' src='//i.imgur.com/pm8ZGLK.png' />
					</a>
					<Item.Content>
						<Item.Header>Argo</Item.Header>
						<Item.Meta>Mobile app</Item.Meta>
						<Item.Description>
						Grouper connects the technology companies with technical talent in your area. We understand that the hiring process can be difficult not only for recruiters, but also the candidates. We want to help engineers find amazing jobs, and help recruiters connect with candidates based on their technical abilities rather than their resume credentials. Every attendee has passed a rigorous coding challenge that is objective and standardized, which provides recruiters that all attendees have a strong baseline understanding of technology.
						</Item.Description>
						{/* <Item.Extra>Mobile app</Item.Extra> */}
					</Item.Content>
				</Item>
			</Item.Group>
		</Tab.Pane> 
	},
	{ menuItem: 'Personality Insights', 
		render: () => 
		<Tab.Pane>
		<Item.Group>
				<Item>
					<a href='//ucla-hackers.github.io/twitter-watson-personality-insights/' target='_blank' rel='noopener noreferrer'>
						<Item.Image size='large' src='//i.imgur.com/NlSfeI9.png' />
					</a>
					<Item.Content>
						<Item.Header>Personality Insights</Item.Header>
						<Item.Meta>Desktop app</Item.Meta>
						<Item.Description>
						Grouper connects the technology companies with technical talent in your area. We understand that the hiring process can be difficult not only for recruiters, but also the candidates. We want to help engineers find amazing jobs, and help recruiters connect with candidates based on their technical abilities rather than their resume credentials. Every attendee has passed a rigorous coding challenge that is objective and standardized, which provides recruiters that all attendees have a strong baseline understanding of technology.
						</Item.Description>
						{/* <Item.Extra>Additional Details</Item.Extra> */}
					</Item.Content>
				</Item>
			</Item.Group>
		</Tab.Pane> 
	}
]


class Portfolio extends Component {
	
	render() {

		return (
			<Container fluid className='portfolio-image' >
			<Grid className='portfolio-grid'>
				<Grid.Column width={3} />
				<Grid.Column width={10}>
					<Segment>
					<ScrollableAnchor id={'portfolio'}>
						<Tab 
							menu={{ fluid: true, vertical: true, tabular: 'left' }} 
							panes={panes} 
							className='portfolio-copy'
						/>
					</ScrollableAnchor>
					</Segment>
				</Grid.Column>
				<Grid.Column width={3} />
			</Grid>
			{/* <Image src='//i.imgur.com/hukU4vp.jpg' className='top-image' /> */}
			</Container>
		);
	}
}







export default Portfolio

