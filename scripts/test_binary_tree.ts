
// const {Tree} = require('BinarySearchTreie');
import { BinarySearchTree } from "./binary_search_tree";
let tree: BinarySearchTree = new BinarySearchTree(); 

function getRandomInt(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function testBinaryTreeInsertion(size: number) {
    if(size < 2){
        throw new Error('Size of test must be > 2');
    }
    let tree = new BinarySearchTree();
    let startTime = new Date(); 
    console.log(`Starting to insert ${size} items`);
    
    for (let i = 0; i < size; i++) {
       tree.insert(getRandomInt(1, size), generateTaskName()); 
    }
    let endTime = new Date();
    let timeTaken = endTime.valueOf() - startTime.valueOf()
    console.log(`Complete ${timeTaken}`)
}

function generateTaskName(): string {
    let part1: Array<string> = ['get', 'check', 'enhance', 'decipher']; 
    let part2: Array<string> = ['data', 'algorithm', 'persistence', 'structure']; 
    return part1[getRandomInt(0, part1.length-1)] + ' ' + part2[getRandomInt(0, part2.length - 1)];
}

testBinaryTreeInsertion(1001);