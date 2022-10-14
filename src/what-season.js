const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */



const seasonMap = [["winter", 12, 1, 2], ["spring", 3, 4, 5], ["summer", 6, 7, 8], ["autumn", 9, 10, 11]]
function getSeason(date) {
	if (arguments.length < 1) return 'Unable to determine the time of year!';
	if (date.hasOwnProperty('toString')) throw new Error('Invalid date!');
	const dateMounth = date.getUTCMonth()
	for (let season of seasonMap) {
		if (season.includes(dateMounth + 1)) return season[0]
	}
}
module.exports = {
	getSeason
};
