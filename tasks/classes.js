/*
	Rewrite this prototypal nightmare to beautiful ES6 Classes
*/

function ParentClass() {
	this.x = 2;
}
ParentClass.prototype.add = function (num) {
	this.x += num;
}

function SubClass() {
	ParentClass.call(this);
}

SubClass.staticMethod = function () {
	return 42;
}

SubClass.prototype = Object.create(ParentClass.prototype, {
	subtract: {
		value: function (num) {
			this.x -= num;
		}
	}
});

SubClass.prototype.constructor = SubClass;

export default SubClass;
