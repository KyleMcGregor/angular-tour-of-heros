var fruitBask = ['apple', 'banana', 'orange', 'apple', 'banana'];
var tal = fruitBask.reduce(function (accumulator, fruit) {
    accumulator[fruit] = (accumulator[fruit] || 0) + 1;
    return accumulator;
}, {});
console.log(tal); // Output: { apple: 2, banana: 2, orange: 1 }
