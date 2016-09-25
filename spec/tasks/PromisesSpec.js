import getUser from "../../tasks/promises.js";

describe('Use ES6 promises', function () {
	it('should return a person using resolve', function (done) {
		if(getUser.hasOwnProperty("then")) {
			getUser().then((user) => {
				expect(typeof user).toBe('object');
				expect(user.name).toBe('Glenn');
				expect(user.age).toEqual(28);
				done();
			});
		} else {
			done();
		}
	});
});
