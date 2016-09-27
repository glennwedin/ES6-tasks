import {result} from '../../tasks/asyncAwait.js';

describe('Use ES7 async/await', function () {
	var originalTimeout;
    beforeEach(function(done) {
		setTimeout(done, 4000);
    });

    it("should have a result", function(done) {
		expect(typeof result.data).toBe('string');
		expect(result.done).toBe(true);
		done();
    });

});
