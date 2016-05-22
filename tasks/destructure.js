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


/*
*	Rewrite to use destructuring
*/

var person = getPerson();
export default {
	name: person.name,
	email: person.email,
	age: person.age,
	random: person.random
}


//Fasit
/*
let { name, email, age, random } = getPerson();

export default {
	name,
	email,
	age,
	random
}
*/