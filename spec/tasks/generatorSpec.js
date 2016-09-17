import generator from '../../tasks/generators.js';

var g = generator();
describe('Use ES6 generators', function () {
	let obj;
	it('Should contain name', function () {
		obj = g.next();
		expect(obj.value).toBe('Bernt');
		expect(obj.done).toBe(false);

		obj = g.next();
		expect(obj.value).toBe('Alfa');
		expect(obj.done).toBe(false);

		obj = g.next();
		expect(obj.value).toBe('Max Mekker');
		expect(obj.done).toBe(false);

		obj = g.next();
		expect(obj.value).toBe('Leonora');
		expect(obj.done).toBe(false);

		obj = g.next();
		expect(obj.value).toBe(undefined);
		expect(obj.done).toBe(true);
	});
});
