var promise = new Promise(function(fulfill, reject) {
	fulfill('MANHATTAN');
});

function attachTitle(value){
	return'DR. '+value;
}

promise.then(attachTitle).then(console.log);