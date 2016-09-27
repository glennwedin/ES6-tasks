import thisIsCool from '../../tasks/decorators';

describe("ES7 decorator", function() {
	let decClass = new thisIsCool;
	decClass.setAnswer(43);
	it("should show the corret answer no matter what", function() {
		expect(decClass.theAnswerToEverything).toBe(42);
	});
});
