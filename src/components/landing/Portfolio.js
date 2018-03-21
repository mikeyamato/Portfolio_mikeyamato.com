import React, { Component } from 'react';
import { Responsive, Grid, Tab, Image, Segment } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Parallax } from 'react-parallax';
import './landing.css';


const panes = [
	{ menuItem: 'Groupr', 
		render: () => 
		<Tab.Pane>
			<Grid className='portfolio-height'>
				<Grid.Row>
					<a href='//www.groupr.tech/' target='_blank' rel='noopener noreferrer' className='portfolio-img'>
						<Image src='//i.imgur.com/TQym0w8.png'/>
					</a>
				</Grid.Row>
				<Grid.Row>
					<p className='portfolio-text-p'>
						Grouper connects the technology companies with technical talent in your area. We want to help engineers find amazing jobs, and help recruiters connect with candidates based on their technical abilities rather than their resume credentials.
					</p>
					{/* <Item.Extra>Desktop app</Item.Extra> */}
				</Grid.Row>
			</Grid>
		</Tab.Pane> 
	},
	{ menuItem: 'ARgo', 
		render: () => 
		<Tab.Pane>
			<Grid className='portfolio-height'>
				<Grid.Row>
					<a href='//github.com/ARKrew/workingArgo' target='_blank' rel='noopener noreferrer' className='portfolio-img-argo'>
						<Image src='//i.imgur.com/fBWx9cc.png'/>
					</a>
				</Grid.Row>
				<Grid.Row>
					<p className='portfolio-text-p'>
						ARgo is a mobile application that uses location intelligence and augmented reality to immerse users in a new experience. 					</p>
					{/* <Item.Extra>Desktop app</Item.Extra> */}
				</Grid.Row>
			</Grid>
		</Tab.Pane> 
	},
	{ menuItem: 'Gifthub', 
		render: () => 
		<Tab.Pane>
			<Grid className='portfolio-height'>
				<Grid.Row>
					<a href='//ucla-hackers.github.io/twitter-watson-personality-insights/' target='_blank' rel='noopener noreferrer' className='portfolio-img'>
						<Image src='//i.imgur.com/mfjeEk4.png'/>
					</a>
				</Grid.Row>
				<Grid.Row>
					<p className='portfolio-text-p'>
					Struggling to find the gifts for your friends and family? Use Gifthub to find the perfect gift! Analyze twitter feeds for gift recommendations based on IBM Watson's Personality Insights.
					</p>
					{/* <Item.Extra>Desktop app</Item.Extra> */}
				</Grid.Row>
			</Grid>
		</Tab.Pane> 
	}
]

class Portfolio extends Component {
	
	render() {

		return (
			<Parallax
				blur={{ min: -15, max: 15 }}
				bgImage='//i.imgur.com/cqsQaPX.jpg'
				bgImageAlt="train"
				strength={200}
			>
			{/* computer screens */}
			<Responsive minWidth={701}>
			<Grid>
	 			<Grid.Column width={3} />
	 			<Grid.Column width={10} className='portfolio-grid'>
				<Segment secondary>
					<ScrollableAnchor id={'portfolio'}>
						<Tab 
							menu={{ fluid: true, vertical: true, tabular: 'right' }} 
							panes={panes} 
						/>
					</ScrollableAnchor>
				</Segment>
				</Grid.Column>
	 			<Grid.Column width={3} />
	 		</Grid>
			<div style={{ height: 'auto' }} />
			</Responsive>

			{/* mobile screens */}
			<Responsive maxWidth={700}>
			<Grid>
	 			<Grid.Column width={1} />
	 			<Grid.Column width={14} className='portfolio-grid'>
				<Segment secondary>
					<ScrollableAnchor id={'portfolio'}>
						<Tab 
							menu={{ fluid: true, vertical: true, tabular: 'right' }} 
							panes={panes} 
						/>
					</ScrollableAnchor>
				</Segment>
				</Grid.Column>
	 			<Grid.Column width={1} />
	 		</Grid>
			<div style={{ height: 'auto' }} />
			</Responsive>
			</Parallax>
		);
	}
}

export default Portfolio


