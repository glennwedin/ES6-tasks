/*
*	Rewrite to es6 to 
*/

export person = {
	name: "Linus Torvalds",
	getName: function () {
		return this.name;
	}
}


//This wont work
export function listNames (callback) {
	var i = 0,
		list = ["Tim Berners-Lee", "John Resig", "Haakon Wium Lie"];

	for(i; i < list.length; i++) {
		(function (i) {
			setTimeout(function () {
				callback(list[i]);
			}, 300);
		}(i));
	}
}
