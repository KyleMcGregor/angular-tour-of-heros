class BinarySearchTree {
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
                this.insertNode(root.left, newNode);
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
}
