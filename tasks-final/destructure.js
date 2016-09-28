function getPerson () {
	return {
		name: "Glenn Wedin",
		email: "glenn.wedin@capgemini.com",
		age: 28,
		random () {
			return Math.random()*10;
		}
	}
}

let { name, email, age, random } = getPerson();

export default {
	name,
	email,
	age,
	random
}
