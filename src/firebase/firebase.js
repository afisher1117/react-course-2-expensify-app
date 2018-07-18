import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expense) => {
//       expenses.push({
//         if: expense.key,
//         ...expense.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expense) => {
//       expenses.push({
//         id: expense.key,
//         ...expense.val()
//       });
//     });
//     console.log(expenses);
//   });


// database.ref('expenses').push({
//   description: 'Bought Coffee',
//   amount: '$3.99',
//   note: '',
//   createdAt: 'July 4th 2018'
// });

// database.ref('notes').push({
//     body: 'React Native, Angular, Python',
//     title: 'Course Topics'
// });

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     const name = snapshot.child('name').val();
//     const job = snapshot.child('job/title').val();
//     const company = snapshot.child('job/company').val();
//     console.log(`${name} is a ${job} at ${company}`);
//   }, (e) => {
//     console.log('Error with data fetching', e);
//   });

// setTimeout(() => {
//   database.ref('job/title').set('React Developer');
//   database.ref('job/company').set('Facebook');
//   }, 3500);  

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error with data fetching', e);
//   });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref('age').off(onValueChange);
// }, 7500);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   });

// database.ref().set({
//   name: 'Adam Fisher',
//   age: 33,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Victorville',
//     country: 'United States'
//   },
// }).then(()=> {
//   console.log('data is saved')
// }).catch((error) => {
//   console.log('This failed: ', error);
// });

// database.ref().update({
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
//   stressLevel: '9'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data removed')
//   }).catch((error) => {
//     console.log('did not remove data.', error)
//   });
