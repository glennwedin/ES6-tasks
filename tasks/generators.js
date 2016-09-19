var list = ["Leonora", "Max Mekker", "Alfa", "Bernt"];

/*
*	Write a generator function to iterate through this list.
*	The tests expects to be able to use "next()" to receive the next item from the list;
*/
function fakeGenerator () {
	var l = list.length, obj;
	return {
		next: function () {
		 	obj = {
				value: list[--l],
				done: (l < 0)
			}
			return obj;
		}
	}
}
export default fakeGenerator;



/*
var list = ["Leonora", "Max Mekker", "Alfa", "Bernt"],
l = list.length;

export default function* generator () {
	while(l--) {
		yield list[l];
	}
}
*/
