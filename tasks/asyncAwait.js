//LEAVE THIS HERE
//Simulating ajax call
var getAsyncData = function () {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve({data: "Cool stuff", done: true});
		}, 3000);
	});
}

//Use async/await to get the return value and set result - Do not use the callback-pattern

var result = null;
getAsyncData().then(function (res) {
	result = res;
});

/*
//løsningsforslag
let result = null;
let asyncData = async function () {
	result = await getAsyncData();
}()
*/


//export the result
export {
	result
}
