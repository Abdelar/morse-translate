import React, { useState } from 'react';
import SyncAlt from '@material-ui/icons/SyncAlt';
import './App.css';
import { encode, decode } from './helper';

const App = () => {
	const [decoded, setDecoded] = useState('');
	const [encoded, setEncoded] = useState('');
	const [toMorse, setToMorse] = useState(true);

	const handleChange = event => {
		const { value } = event.target;
		if (toMorse) {
			setDecoded(value);
			setEncoded(encode(value));
		} else {
			setEncoded(value);
			setDecoded(decode(value));
		}
	};
	const revert = () => {
		setToMorse(!toMorse);
	};

	return (
		<div className='App'>
			<div className='container'>
				<h1 className='name'>Morse Translate</h1>
				<h2 className='intro'>Translate to and from Morse code...</h2>
				<div className='row'>
					<div id={toMorse ? 'first' : 'second'} className='column'>
						<label>Plain Text</label>
						<textarea
							name='plain_text_area'
							value={decoded}
							onChange={handleChange}
							readOnly={!toMorse}
							autoFocus
							placeholder={
								toMorse
									? 'Type your message in plain text here! 🖊'
									: 'Your decoded message will appear here!'
							}
						/>
					</div>
					<SyncAlt className='revert' onClick={revert} fontSize='large' />
					<div id={toMorse ? 'second' : 'first'} className='column'>
						<label>Morse Code</label>
						<textarea
							name='morse_text_area'
							readOnly={toMorse}
							onChange={handleChange}
							placeholder={
								toMorse
									? 'Your Morse code will appear here!'
									: 'Type your encoded message here! 🖊 Use <<•>> and <<−>> symbols to create characters. Separate everything with spaces.'
							}
							value={encoded}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
