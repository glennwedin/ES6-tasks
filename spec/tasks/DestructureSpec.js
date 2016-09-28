import obj from "../../tasks/destructure.js";

describe('Use ES6 desctructuring', function () {
	it('should have a persons information', function () {
		expect(obj.name).toBe("Glenn Wedin");
		expect(obj.email).toBe("glenn.wedin@capgemini.com");
		expect(obj.age).toEqual(28);
		expect(typeof obj.random).toBe("function");
		expect(obj.random()).toBeGreaterThan(0);
		expect(obj.random()).not.toBeGreaterThan(10);
	});
});
