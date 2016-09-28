import arrayResult from "../../tasks/arrows.js";

describe('Use ES6 Arrows', function () {
	it('result should be 54', function () {
		let res = 0;
		res = arrayResult.reduce((prev, current) => {
			return prev+current;
		});
		expect(res).toEqual(54);
	});
});
