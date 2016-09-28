/*
*	Rewrite to es6 - use arrows
*/

var array = [1,2,3,4,5,6,7,8,9];

var arrayResult;
arrayResult = array.map(function (n) {
	return n+1;
});

export default arrayResult;
