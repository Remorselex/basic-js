const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
let k = 0.693 / HALF_LIFE_PERIOD;
let t = 0;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	//   throw new NotImplementedError('Not implemented');
	if (typeof sampleActivity != "string") return false
	t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
	if (!Number.isInteger(Math.ceil(t)) || t < 0) return false;
	return Math.ceil(t);
}

module.exports = {
	dateSample
};
