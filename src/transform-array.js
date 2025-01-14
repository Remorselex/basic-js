const { NotImplementedError, checkForThrowingErrors } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(arr) {

// 	if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
// 	return arr.reduce((acc, curVal, index, arr) => {
// 		if (curVal == '--double-next') {
// 			curVal = arr[index + 1]
// 		}
// 		if (curVal == '--double-prev') {
// 			curVal = arr[index - 1]
// 		}
// 		return acc.concat(curVal)
// 	}, [])
// }
function transform(arr) {
	if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
	let newArr = arr.reduce((acc, curVal, index, arr) => {
		if (curVal === '--double-next') curVal = arr[index + 1]
		if (curVal === '--double-prev') curVal = arr[index - 1]
		return acc.concat(curVal)
	}, [])
	console.log(newArr)

	return newArr
}
module.exports = {
	transform
};





