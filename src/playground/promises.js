const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'adam',
    //   age: 33
    // });
    reject('Something went wrong!');
  }, 2000)
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error)
});

console.log('after');