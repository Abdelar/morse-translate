import React, { useState } from 'react';
import SyncAlt from '@material-ui/icons/SyncAlt';
import './App.css';
import { encode, decode } from './helper';

const App = () => {
	const [decoded, setDecoded] = useState('');
	const [encoded, setEncoded] = useState('');
	const [toMorse, setToMorse] = useState(true);

	const handleChange = event => {
		const { value, name } = event.target;
		if (toMorse) {
			setDecoded(value);
		} else {
			setEncoded(value);
			console.log({ encoded, decoding: decode(encoded), decoded });
		}
	};
	const revert = () => {
		// setEncoded('');
		// setDecoded('');
		setToMorse(!toMorse);
	};

	return (
		<div className='App'>
			<div className='container'>
				<h3 className='intro'>Translate to and from Morse code...</h3>
				<div className='row'>
					<div className='column'>
						<label>Plain Text</label>
						<textarea
							name='plain_text_area'
							className='plain_text_area'
							value={toMorse ? decoded : decode(encoded)}
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
					<SyncAlt className='revert' onClick={revert} />
					<div className='column'>
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
							className='morse_text_area'
							value={toMorse ? encode(decoded) : encoded}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
