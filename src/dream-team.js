const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam(members) {
// 	if (!Array.isArray(members)) return false
// 	//throw new NotImplementedError('Not implemented');
// 	let filteredMembers = members.filter(el => el === `${el}`)
// 	filteredMembers = filteredMembers.map(item => item.trim())
// 	let nameOfTeam = filteredMembers.sort().reduce((acc, curVal) => {
// 		return acc += curVal[0]
// 	}, "")
// 	return nameOfTeam.toUpperCase()
// }

function createDreamTeam(members) {
	if (!Array.isArray(members)) return false;
	let filteredMembers = members.filter(el => el === `${el}`)
	filteredMembers = filteredMembers.map(item => item.trim())
	filteredMembers = filteredMembers.map(item => item[0].toUpperCase())
	filteredMembers.sort()
	let nameOfTeam = filteredMembers.sort().reduce((acc, curVal) => {
		return acc += curVal[0]
	}, "")
	return nameOfTeam
}

module.exports = {
	createDreamTeam
};
