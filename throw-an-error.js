function parsePromised(json) {
	return new Promise(function(resolve, reject) {
		try{
			resolve(JSON.parse(json));
		} catch(e) {
			reject(e.message);
		}
	});
}

parsePromised(process.argv[2]).then(console.log, function(e) {
	console.log(e);
})