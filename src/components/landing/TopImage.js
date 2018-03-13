import React from 'react';
import { 
	Header, 
	Container, 
	Image 
} from 'semantic-ui-react';
import './landing.css';

const TopImage = () => {
	return (
		<Container fluid>
			<Header>
				<Header.Content className='top-image-text'>
					Hello
				</Header.Content>
			</Header>
			<Image src='//i.imgur.com/4o9FSOP.jpg' className='top-image' />
		</Container>
	);
}

export default TopImage;