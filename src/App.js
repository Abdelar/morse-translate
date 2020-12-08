import React, { useState, useRef, useEffect } from 'react';
import SyncAlt from '@material-ui/icons/SyncAlt';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

import './App.css';
import { encode, decode } from './helper';
import { Multimedia } from './Multimedia';
import { Footer } from './Footer';
import { Keys } from './Keys';
import { Copy } from './Copy';

const App = () => {
	const [decoded, setDecoded] = useState('');
	const [encoded, setEncoded] = useState('');
	const [toMorse, setToMorse] = useState(true);
	const plain_text_area = useRef();
	const morse_text_area = useRef();

	useEffect(() => {
		if (toMorse) {
			plain_text_area.current.focus();
		} else {
			morse_text_area.current.focus();
		}
	}, [toMorse]);

	useEffect(() => {
		setDecoded(decode(encoded));
	}, [encoded]);

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

	const typeSymbol = symbol => {
		setEncoded(encoded + symbol);
		morse_text_area.current.focus();
	};

	const CustomTooltip = withStyles(theme => ({
		tooltip: {
			backgroundColor: 'var(--blueGrey-color-900)',
			color: 'white',
		},
	}))(Tooltip);

	return (
		<div className='App'>
			<div className='container'>
				<h1 className='name'>Morse Translate</h1>
				<h2 className='intro'>Translate to and from Morse code...</h2>
				<div className='row'>
					<div id={toMorse ? 'first' : 'second'} className='column'>
						<label>Plain Text</label>
						<textarea
							ref={plain_text_area}
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
					<CustomTooltip title='Switch editors'>
						<SyncAlt className='revert' onClick={revert} fontSize='large' />
					</CustomTooltip>
					<div id={toMorse ? 'second' : 'first'} className='column'>
						<label>Morse Code</label>
						<textarea
							ref={morse_text_area}
							name='morse_text_area'
							readOnly={toMorse}
							className={toMorse ? '' : 'morse_text_area'}
							onChange={handleChange}
							placeholder={
								toMorse
									? 'Your Morse code will appear here!'
									: 'Use <<•>> and <<−>>, Space for letters separation and forward slash for words separation. For example (SOS): ••• −−− •••'
							}
							value={encoded}
						/>
						{toMorse ? (
							<Copy forwardedRef={morse_text_area} />
						) : (
							<Keys clicked={typeSymbol} />
						)}
					</div>
				</div>
				<Multimedia encoded={encoded} />
				<Footer />
				<span id='copyright'>abdell.tech 2020</span>
			</div>
		</div>
	);
};

export default App;
