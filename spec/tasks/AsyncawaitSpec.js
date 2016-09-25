import {getAsyncData, getResult} from '../../tasks/asyncAwait.js';

describe('Use ES7 async/await', function () {
	var originalTimeout;
    beforeEach(function(done) {
     	getAsyncData();
		setTimeout(done, 4000);
    });

    it("should have a result", function(done) {
		let result = getResult();
		expect(typeof result.data).toBe('string');
		expect(result.done).toBe(true);
		done();
    });

});
