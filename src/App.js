import React from 'react';
import SyncAlt from '@material-ui/icons/SyncAlt';
import './App.css';

function App() {
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
							value=''
							autoFocus
							placeholder='Type your message in plain text here! 🖊'
						/>
					</div>
					<SyncAlt className='revert' />
					<div className='column'>
						<label>Morse Code</label>
						<textarea
							name='morse_text_area'
							className='morse_text_area'
							value='value'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
