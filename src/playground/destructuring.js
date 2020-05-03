// // object destructuring

// // const person = {
// //     name: 'Wei',
// //     age: 36,
// //     location: {
// //         city: 'Alhambra',
// //         temp: 86
// //     }

// // };

// // const {name : firstname= 'Anonymous', age} = person;
// // console.log(`${firstname} is ${age}.`);

// // const {city, temp: temperature} = person.location;
// // if(city && temperature) {
// //     console.log(`It's ${temperature} in ${city}.`);
// // }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array destructuring

const address = ['328 s 4th st', 'Alhambra', 'California', '91801'];

const [, city, state = 'Jiangsu'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , medium] = item;

console.log(`A medium ${name} costs ${medium}.`);