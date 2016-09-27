/*
	create a decorator to validate setAnswer and correct it if wrong
*/

class SoCool {

	constructor() {
		this.theAnswerToEverything = 5;
	}

	setAnswer(value) {
		this.theAnswerToEverything = value;
	}
	
}
export default SoCool;

/*
Løsningsforslag
var myDecorator = function (target, value, descriptor) {
	const method = descriptor.value;

	descriptor.value = function (arg) {
		if(arg !== 42) {
			arg = 42;
			method.apply(this, [arg])
		}
		return this;
	}
}

class SoCool {
	constructor() {
		this.theAnswerToEverything = 5;
	}

	@myDecorator
	setAnswer(value) {
		this.theAnswerToEverything = value;
	}
}

export default SoCool;
*/
