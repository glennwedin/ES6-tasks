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
