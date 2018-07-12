import React from 'react';
import { Popup } from 'semantic-ui-react';

const Resume = () => {
	return (
		// format: //drive.google.com/file/d/FILE_ID/edit?usp=sharing
		// to be: //drive.google.com/uc?export=download&id=FILE_ID
		<Popup
		trigger={<a href='//drive.google.com/uc?export=download&id=1-ZJYza5EQcJT0taLQH5_2xCA0zuXBC1N'>Curriculum vitae</a>}
		content='Worth downloading 😊'
		inverted
		position='top center'
		/>
	);
}

export default Resume;

