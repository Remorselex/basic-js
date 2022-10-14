const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
let canoiObj = {
	turns: 0,
	seconds: 0,
};
function calculateHanoi(disksNumber, turnsSpeed) {

	let turns = Math.pow(2, disksNumber) - 1;
	let seconds = Math.floor(turns / turnsSpeed * 3600);
	canoiObj.turns = turns;
	canoiObj.seconds = seconds;
	console.log(canoiObj)
	return canoiObj;
}

module.exports = {
	calculateHanoi
};
