import React, { Component } from 'react';
import { Responsive, Grid, Message, Icon, List } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Resume from './Resume';
import VCard from './VCard';
import { Parallax } from 'react-parallax';

class Contact extends Component {

	render () {
		return ( 
			<Parallax
				blur={{ min: -15, max: 15 }}
				bgImage='//i.imgur.com/zFRP7Ya.jpg'
				bgImageAlt="pool"
				strength={200}
			>
			
			{/* computer screens */}
			<Responsive minWidth={851}>
			<Grid>
				<Grid.Column width={5} />
				<Grid.Column width={6} className='contact-grid'>
				<ScrollableAnchor id={'contact'}>
				<Message>
					<List animated selection>
						<List.Item>
							<Icon name='marker' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='//www.google.com/maps/place/Los+Angeles,+CA/' target='_blank' rel='noopener noreferrer'>Los Angeles, CA</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='phone' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='tel:+1-747-215-7826'>+1 (747) 215-7826</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name='mail outline' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href="mailto:mikeyamato@gmail.com?subject=mikeyamato.com - Hi Mike, Let's Connect">Email me</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='file pdf outline' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<Resume />
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='linkedin square' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='//www.linkedin.com/in/mikeyamato/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='github' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='//github.com/mikeyamato' target='_blank' rel='noopener noreferrer'>GitHub</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='skype' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='skype:burbank_mike?userinfo'>Skype</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='vcard outline' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<VCard />
							</List.Content>
						</List.Item>
					</List>
				</Message>
				</ScrollableAnchor>
				</Grid.Column>
				<Grid.Column width={5} />
			</Grid>
			</Responsive>

			{/* tablet screens */}
			<Responsive minWidth={651} maxWidth={850}>
			<Grid>
				<Grid.Column width={4} />
				<Grid.Column width={8} className='contact-grid'>
				<ScrollableAnchor id={'contact'}>
				<Message>
					<List animated selection>
						<List.Item>
							<Icon name='marker' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='//www.google.com/maps/place/Los+Angeles,+CA/' target='_blank' rel='noopener noreferrer'>Los Angeles, CA</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='phone' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='tel:+1-747-215-7826'>+1 (747) 215-7826</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name='mail outline' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href="mailto:mikeyamato@gmail.com?subject=mikeyamato.com - Hi Mike, Let's Connect">Email me</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='file pdf outline' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<Resume />
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='linkedin square' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='//www.linkedin.com/in/mikeyamato/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='github' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='//github.com/mikeyamato' target='_blank' rel='noopener noreferrer'>Github</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='skype' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='skype:burbank_mike?userinfo'>Skype</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='vcard outline' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<VCard />
							</List.Content>
						</List.Item>
					</List>
				</Message>
				</ScrollableAnchor>
				</Grid.Column>
				<Grid.Column width={4} />
			</Grid>
			</Responsive>

			{/* mobile screens */}
			<Responsive maxWidth={650}>
			<Grid>
				<Grid.Column width={2} />
				<Grid.Column width={12} className='contact-grid'>
				<ScrollableAnchor id={'contact'}>
				<Message>
					<List animated selection>
						<List.Item>
							<Icon name='marker' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='//www.google.com/maps/place/Los+Angeles,+CA/' target='_blank' rel='noopener noreferrer'>Los Angeles, CA</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='phone' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='tel:+1-747-215-7826'>+1 (747) 215-7826</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<List.Icon name='mail outline' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href="mailto:mikeyamato@gmail.com?subject=mikeyamato.com - Hi Mike, Let's Connect">Email me</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='file pdf outline' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<Resume />
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='linkedin square' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='//www.linkedin.com/in/mikeyamato/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='github' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='//github.com/mikeyamato' target='_blank' rel='noopener noreferrer'>Github</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='skype' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<a href='skype:burbank_mike?userinfo'>Skype</a>
							</List.Content>
						</List.Item>
						<List.Item>
							<Icon name='vcard outline' size='big' />
							<List.Content className='contact-text' verticalAlign='middle'>
								<VCard />
							</List.Content>
						</List.Item>
					</List>
				</Message>
				</ScrollableAnchor>
				</Grid.Column>
				<Grid.Column width={2} />
			</Grid>
			</Responsive>
			</Parallax>
		);
	}
}

export default Contact;
