/*
*	Rewrite using promises to make the test pass
*/

export default function getUser (callback) {
	setTimeout(function () {
		var user = {
			name: "Glenn",
			age: 28
		}
		callback(user);
	}, 1000);
}
