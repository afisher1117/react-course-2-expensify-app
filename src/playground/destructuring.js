//
// Object Destructuring
//

// const person = {
//   name: 'Adam',
//   age: 34,
//   location: {
//     city: 'victorville',
//     temp: '115°'
//   }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`)


// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// const address = ['12728 Trotters Ln', 'Victorville', 'California', '92392'];

// const [, city, state] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [itemName, , medPrice] = item;

console.log(`A medium ${itemName} costs ${medPrice}`);