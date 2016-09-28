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

	static staticMethod () {
		return 42;
	}
}

export default SubClass;
