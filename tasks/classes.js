/*
	Rewrite this prototypal nightmare to ES6 Classes
*/

function ParentClass () {
	this.x = 2;
}
ParentClass.prototype.add = function (num) {
	this.x += num;
}

function SubClass () {
	ParentClass.call(this);
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


//Fasit
/*
class ClassTest{
	constructor () {
		this.x = 2;
	}

	add (num) {
		this.x += num;
	}
}

class SubClass extends ClassTest {
	constructor () {
		super();
	}

	subtract (num) {
		this.x -= num;
	}
}

export default SubClass;
*/
