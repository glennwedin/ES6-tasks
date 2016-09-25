var myDecorator = function (a,b,c) {
	console.log(a,b,c)
}

class SoCool {

	@myDecorator
	coolMethod() {
		console.log('woop')
	}
}

export default SoCool;
