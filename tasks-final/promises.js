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
