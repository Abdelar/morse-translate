import React from 'react';
import './Footer.css';

export const Footer = () => {
	return (
		<div id='footer'>
			<p className='footer_text'>
				Morse code is a method used in telecommunication to encode text
				characters as standardized sequences of two different signal durations,
				called dots and dashes or dits and dahs. Morse code is named after
				Samuel Morse, an inventor of the telegraph.
			</p>
			<a id='wiki' href='https://en.wikipedia.org/wiki/Morse_code'>
				Wikipedia
			</a>
		</div>
	);
};
