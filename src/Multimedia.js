import React, { useState, useEffect } from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import { toBinary, Tone } from './helper';
import './Multimedia.css';

let tone;
let timer;
let volume;
let frequency;
let period = 200; // default is 200
export const Multimedia = props => {
	const [playing, setPlaying] = useState(false);
	const [light, setLight] = useState(false);

	useEffect(() => {
		if (playing) {
			const code = toBinary(props.encoded);
			let i = 0;
			timer = setInterval(() => {
				if (code[i] === 1) {
					if (i === 0 || code[i - 1] === 0) {
						tone = new Tone(volume, frequency);
						tone.start();
						setLight(true);
					}
				} else if (code[i] === 0) {
					tone && tone.stop();
					setLight(false);
				} else {
					clearInterval(timer);
					setPlaying(false);
				}
				i++;
			}, period);
		} else {
			tone && tone.stop();
			clearInterval(timer);
			setLight(false);
		}
	}, [playing]);

	const toggleSound = () => {
		setPlaying(!playing);
	};

	const onVolumeChange = event => {
		volume = event.target.value;
		if (tone) {
			tone.volume.value = volume;
		}
	};

	const onFrequencyChange = event => {
		frequency = event.target.value;
		if (tone) {
			tone.frequency.value = frequency;
		}
	};

	const onPeriodChange = event => {
		period = event.target.value;
	};

	return (
		<div className='multimedia'>
			<span onClick={toggleSound}>
				{playing ? (
					<StopRoundedIcon fontSize='large' className='icon_button' />
				) : (
					<PlayArrowRoundedIcon fontSize='large' className='icon_button' />
				)}
			</span>
			<EmojiObjectsIcon
				fontSize='large'
				className='bulb'
				id={light ? 'on' : 'off'}
			/>
			<div className='volume controls'>
				<span>Volume</span>
				<input
					type='range'
					name='volume'
					min='0'
					max='1'
					step='0.05'
					defaultValue='0.3'
					onChange={onVolumeChange}></input>
			</div>
			<div className='frequency controls'>
				<span>Frequency</span>
				<input
					type='range'
					name='frequency'
					min='10'
					max='5000'
					step='50'
					defaultValue='200'
					onChange={onFrequencyChange}></input>
			</div>
			<div className='period controls'>
				<span>Period</span>
				<input
					disabled={playing}
					type='range'
					name='period'
					min='50'
					max='2000'
					step='25'
					defaultValue='200'
					onChange={onPeriodChange}></input>
			</div>
		</div>
	);
};
