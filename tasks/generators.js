var list = ["Leonora", "Max Mekker", "Alfa", "Bernt"];

/*
*	Write a real generator that does the same as the fake generator.
*	The tests expects to be able to use "next()" to receive the next item from the list.
*   The tests expect an object containing "value" and "done"
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
