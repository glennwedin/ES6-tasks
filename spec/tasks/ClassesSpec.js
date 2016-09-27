import SubClass from "../../tasks/classes.js";
let es6class = new SubClass;

describe("ES6 Classes", function() {
	it("contains variable that equals 2", function() {
    	expect(es6class.x).toEqual(2);
	});

	it("should add 4 to x", function () {
		es6class.add(4);
		expect(es6class.x).toEqual(6);
	});

	it("should subtract 10 from x", function () {
		es6class.subtract(10);
		expect(es6class.x).toEqual(-4);
	});

	it("should have a static function that returns 42", function () {
		expect(SubClass.staticMethod()).toBe(42);
	});
});
