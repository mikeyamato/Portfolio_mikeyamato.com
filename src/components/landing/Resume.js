import React from 'react';
import { Popup } from 'semantic-ui-react';

const Resume = () => {
	return (
		// format: //drive.google.com/file/d/FILE_ID/edit?usp=sharing
		// to be: //drive.google.com/uc?export=download&id=FILE_ID
		<Popup
		trigger={<a href='//drive.google.com/uc?export=download&id=1e6B6M9kYW4hAW52Pt2UM-q3sCQr1qB95'>Curriculum vitae</a>}
		content='Worth downloading 😊'
		inverted
		position='top center'
		/>
	);
}

export default Resume;

