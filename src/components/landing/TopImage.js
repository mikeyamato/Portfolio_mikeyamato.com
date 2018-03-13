import React from 'react';
import { 
	Header, 
	Container, 
	Image 
} from 'semantic-ui-react';
import './landing.css';
import ScrollableAnchor from 'react-scrollable-anchor'


const TopImage = () => {
	return (
		<Container fluid>
			<ScrollableAnchor id={'home'}>
				<Header>
					<Header.Content className='top-image-text'>
						Hello
						<br />
						大和慎輔
					</Header.Content>
				</Header>
			</ScrollableAnchor>
			<Image src='//i.imgur.com/4o9FSOP.jpg' className='top-image' />
		</Container>
	);
}

export default TopImage;