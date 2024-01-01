const { v4: uuid4 } = require('uuid');
interface ITreeNode {
    priority: number;
    task: string;
    left: TreeNode | null;
    right: TreeNode | null;
    guid?: string | null;
}


class TreeNode implements ITreeNode {
    constructor(
        public priority: number,
        public task: string,
        public left: TreeNode | null = null,    // initializing these to null for invariance.
        public right: TreeNode | null = null,
        public guid: string | null = uuid4()
    ) { }
}

export class BinarySearchTree {
    private root: TreeNode | null;
    constructor() {
        this.root = null;
    }
    insert(priority: number, task: string): void {
        const newNode = new TreeNode(priority, task);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root: TreeNode, newNode: TreeNode) {
        if (newNode.priority < root.priority) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    checkBalance(): number {
        // the balance algorithms of a bst. 
        // first, need to calculate balance. 
        // i could spend the night here, or i could ChatGPT it... 
        return this.checkBalanceRec(this.root);
    }
    checkBalanceRec(root: TreeNode | null): number {
        return 0;
    }
}


