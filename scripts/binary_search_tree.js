"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
const { v4: uuid4 } = require('uuid');
class TreeNode {
    constructor(priority, task, left = null, // initializing these to null for invariance.
    right = null, guid = uuid4()) {
        this.priority = priority;
        this.task = task;
        this.left = left;
        this.right = right;
        this.guid = guid;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(priority, task) {
        const newNode = new TreeNode(priority, task);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode) {
        if (newNode.priority < root.priority) {
            if (root.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    checkBalance() {
        // the balance algorithms of a bst. 
        // first, need to calculate balance. 
        // i could spend the night here, or i could ChatGPT it... 
        return this.checkBalanceRec(this.root);
    }
    checkBalanceRec(root) {
        return 0;
    }
}
exports.BinarySearchTree = BinarySearchTree;
//# sourceMappingURL=binary_search_tree.js.map