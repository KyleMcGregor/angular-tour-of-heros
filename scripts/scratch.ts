// type FruitBasket = Array<string>;
// type FruitTally = { [fruit: string]: number };

// const fruitBask: FruitBasket = ['apple', 'banana', 'orange', 'apple', 'banana'];

// const tal: FruitTally = fruitBask.reduce((accumulator: FruitTally, fruit: string) => {
//   accumulator[fruit] = (accumulator[fruit] || 0) + 1;
//   return accumulator;
// }, {});

// console.log(tal); // Output: { apple: 2, banana: 2, orange: 1 }

type PipelineFunction = (input: number) => number;

const increment: PipelineFunction = input => input +1;

function scheduleNext(params:type) {
    
}