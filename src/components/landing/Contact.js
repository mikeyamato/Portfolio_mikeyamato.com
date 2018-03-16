import React from 'react';
import { Grid, Message, Icon, List, Segment } from 'semantic-ui-react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Resume from './Resume';
import VCard from './VCard';

const Contact = () => (
  <Grid className='contact-image'>
		<Grid.Column width={5} />
		<Grid.Column width={6}>
			<Segment>
		<ScrollableAnchor id={'contact'}>
		<Message info>
			{/* <Message.Header>Was this what you wanted?</Message.Header>
			<p>Did you know it's been a while?</p> */}
			<List>
				{/* <List.Item>
					<List.Icon name='users' />
					<List.Content>Semantic UI</List.Content>
				</List.Item> */}
				<List.Item>
					<Icon name='marker' />
					<List.Content>Los Angeles, CA</List.Content>
				</List.Item>
				<List.Item>
					<Icon name='phone' />
					<List.Content>+1 (747) 215-7826</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name='mail outline' />
					<List.Content>
						<a href='mailto:mikeyamato@gmail.com'>mikeyamato@gmail.com</a>
					</List.Content>
				</List.Item>
				<List.Item>
					<Icon name='file pdf outline' />
					<List.Content>
						<Resume />
					</List.Content>
				</List.Item>
				<List.Item>
					<Icon name='linkedin square' />
					<List.Content>
						<a href='//www.linkedin.com/in/mikeyamato/' target='_blank' rel='noopener noreferrer'>linkedin.com/in/mikeyamato</a>
					</List.Content>
				</List.Item>
				<List.Item>
					<Icon name='github' />
					<List.Content>
						<a href='//github.com/mikeyamato' target='_blank' rel='noopener noreferrer'>github.com/mikeyamato</a>
					</List.Content>
				</List.Item>
				<List.Item>
					<Icon name='skype' />
					<List.Content>
						<a href='skype:burbank_mike?userinfo'>burbank_mike</a>
					</List.Content>
				</List.Item>
				<List.Item>
					<Icon name='vcard outline' />
					<List.Content>
						<VCard />
					</List.Content>
				</List.Item>
			</List>
		</Message>
		</ScrollableAnchor>
		</Segment>
		</Grid.Column>
		<Grid.Column width={5} />
	</Grid>
)

export default Contact;
