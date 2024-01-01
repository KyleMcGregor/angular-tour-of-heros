
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);

// const evenOnly = numbers.filter(num => num % 2 === 0);

// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

// // arr.reduce(function(accumulator, currentValue, currentIndex, array){ /* computation */ }, initialValue ); 

// // Compute the mean using reduce
// numbers.reduce((acc, cur) => {
//     acc + cur, 0
// }) / numbers.length;

// const fruitBas = ['apple', 'nnana', 'orange', 'apple', 'nnana']; 
// const tally = fruitBas.reduce((acc, frt)=> {
//     acc[frt] = (acc[frt] || 0) + 1;
//     return acc;
// }, {});

// console.log(tally);

// const nestedArrays = [[1,2],[3,4],[5,6]]; 

// const flat = nestedArrays.reduce((acc, val)=> {
//     acc.concat(val)
// }, []);

// function* nameGenerator(){
//     var x = 0.0;
//     yield Math.sin(x += 0.01);
// };

// const gen = nameGenerator();

// for (let index = 0; index < 10; index++) {
//     console.log(gen.next().value); 
// }

// const increment = input => input + 1; 
// const double = input => input *2; 
// const square = input => input * input;

// const functions = [increment, double, square]; 

// const initialValue = 2; 
// const finalValue = functions.reduce((acc, fn) => fn(acc), initialValue);
// console.log(finalValue);

