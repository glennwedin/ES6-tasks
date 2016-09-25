//Use async/await to get the return value - Do not use the callback-pattern
/*
var getAsyncData = function () {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve({data: "Cool stuff", done: true});
		}, 3000);
	});
}

var result = null;
getAsyncData().then(function (res) {
	result = res;
});


*/

//løsningsforslag
let asyncfunc = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({data: "Cool stuff", done: true});
		}, 3000);
	});
}

let result;
let getAsyncData = async function () {
	result = await asyncfunc();
}




//Hjelpefunksjon for test
var getResult = function () {
	return result;
}
export {
	getAsyncData,
	getResult
}
