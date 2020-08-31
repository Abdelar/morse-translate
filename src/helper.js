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

export class Tone {
	constructor(volume = 0.3, frequency = 100) {
		this.osc = audioContext.createOscillator();
		this.volume = gain.gain;
		this.frequency = this.osc.frequency;
		this.volume.value = volume;
		this.frequency.value = frequency;
		this.osc.connect(gain);
	}
	start() {
		this.osc.start();
	}
	stop() {
		this.osc.stop();
	}
}

export const toBinary = str => {
	let res = [];
	str.split('').forEach(char => {
		switch (char) {
			case '•':
				res.push(1, 0);
				break;
			case '−':
				res.push(1, 1, 1, 0);
				break;
			case ' ':
				res.push(0, 0);
				break;
			case '/':
				res.push(0, 0);
				break;

			default:
				break;
		}
	});
	return res;
};
