import { map } from './map';

export const encode = str => {
	const temp = str.trim().split('');
	for (const i in temp) {
		temp[i] = map[temp[i].toUpperCase()] || '?';
	}
	return temp.join(' ');
};

const decodeCharacter = char => {
	if (!char) return '';
	for (const i in map) {
		if (map[i] === char) {
			return i;
		}
	}
	return '?';
};

export const decode = str => {
	const temp = str.trim().split(' ');
	for (const i in temp) {
		temp[i] = decodeCharacter(temp[i]);
	}
	return temp.join('');
};

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const gain = audioContext.createGain();
gain.connect(audioContext.destination);
export const playTone = (volume = 0.3, frequency = 400) => {
	gain.gain.value = volume;
	const osc = audioContext.createOscillator();
	osc.frequency.value = frequency;
	osc.connect(gain);
	osc.start();
	return osc;
};
