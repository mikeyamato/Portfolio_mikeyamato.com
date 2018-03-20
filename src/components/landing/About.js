import React, { Component } from 'react';
import './landing.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Parallax } from 'react-parallax';



// anchor link not working

class About extends Component {

	render() {

		return (

			<Parallax
				blur={{ min: -15, max: 15 }}
				bgImage='//i.imgur.com/SpWZwxo.jpg'
				bgImageAlt="ramen"
				strength={200}
			>
			<ScrollableAnchor id={'about'}>
			<p className='about-text'>
				<div className='about-center'>
					Los Angeles based software engineer versed in JavaScript, HTML, jQuery, AJAX, Node.js, MySQL, Express.js, MongoDB, and React.
					<br />
					<br />
					Cloud service experience with Heroku, mLab, Google Firebase Functions, and Google Realtime Database.
				</div>			
			</p>
			</ScrollableAnchor>
			<div style={{ height: 'auto' }} />
			</Parallax>
		);
	}
}

export default About;


