// function onFulfilled(value) {
// 	console.log(value);
// }
var resutFirst = first().then(function(result) {
	return second(result);
});

resutFirst.then(console.log)