
'use strict';

var promise = new Promise(function(resolve, reject) {
	resolve(1)
});

function iterate(num) {
  console.log(num);
  return num + 1;
}

function alwaysThrows() {
  throw new Error('OH NOES');
}

function onReject(error) {
  console.log(error.message);
}

promise.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject);