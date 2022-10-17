const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	currChain: [],
	getLength() {
		return this.currChain.length;
	},
	addLink(value) {
		this.currChain.push(`( ${value} )`)
		return this;
	},
	removeLink(position) {
		if (!Number.isInteger(position) || position > this.getLength() || position < 1) {
			this.deleteChain();
			throw new Error("You can't remove incorrect link!")
		}
		this.currChain.splice(position - 1, 1)
		return this;
	},
	reverseChain() {
		this.currChain.reverse();
		return this;
	},
	finishChain() {
		const Chain = this.getChain();
		this.deleteChain();
		return Chain;
	},
	deleteChain() {
		this.currChain = [];
	},
	getChain() {
		return this.currChain.join('~~')
	},
};

module.exports = {
	chainMaker
};
