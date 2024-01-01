
import { Hero } from "../src/app/hero";
import { HEROES } from "../src/app/mock-heroes";

function getRandomPrice(min: number, max: number): number{
    return parseFloat((Math.random() * (max-min) + min).toFixed(2));
}


// Adding a price Property
const updatedHeroes: Hero[] = HEROES.map(hero => ({
    ...hero,
    price: getRandomPrice(10, 10000)
}));

console.log(updatedHeroes); 
