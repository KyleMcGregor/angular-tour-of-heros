"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const {Tree} = require('BinarySearchTreie');
const binary_search_tree_1 = require("./binary_search_tree");
let tree = new binary_search_tree_1.BinarySearchTree();
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function testBinaryTreeInsertion(size) {
    if (size < 2) {
        throw new Error('Size of test must be > 2');
    }
    let tree = new binary_search_tree_1.BinarySearchTree();
    let startTime = new Date();
    console.log(`Starting to insert ${size} items`);
    for (let i = 0; i < size; i++) {
        tree.insert(getRandomInt(1, size), generateTaskName());
    }
    let endTime = new Date();
    let timeTaken = endTime.valueOf() - startTime.valueOf();
    console.log(`Complete ${timeTaken}`);
}
function generateTaskName() {
    let part1 = ['get', 'check', 'enhance', 'decipher'];
    let part2 = ['data', 'algorithm', 'persistence', 'structure'];
    return part1[getRandomInt(0, part1.length - 1)] + ' ' + part2[getRandomInt(0, part2.length - 1)];
}
testBinaryTreeInsertion(1001);
//# sourceMappingURL=test_binary_tree.js.map