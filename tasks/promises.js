/*
*	Rewrite using promises to make the test pass
*/

export function getUser (callback) {
	setTimeout(function () {
		var user = {
			name: "Glenn",
			age: 28
		}
		callback(user);
	}, 1000);
}

/*//Fasit
export default function getUser() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let user = {
				name: "Glenn",
				age: 28
			}
			resolve(user);
		}, 1000);
	});
}
*/