/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    this.tree = root;
    this.tree.val = 0;
    let queue = [];
    if(this.tree.left) {
        this.tree.left.val = 1;
        queue.push(this.tree.left);
    }
    if(this.tree.right) {
        this.tree.right.val = 2;
        queue.push(this.tree.right);
    }

    while(queue.length) {
        const temp = [];
        for(let i = 0; i < queue.length; i++) {
            const node = queue.shift();
            if(node.left) {
                node.left.val = node.val*2+1;
                temp.push(node.left);
            }
            if(node.right) {
                node.right.val = node.val*2+2;
                temp.push(node.right);
            }
        }
        queue = temp;
    }
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    const recursiveHelper = (target, node) => {
        if(!node) return false;
        if(node.val === target) return true;
        const leftChild = recursiveHelper(target, node.left);
        const rightChild = recursiveHelper(target, node.right);
        return leftChild || rightChild;
    }
    return recursiveHelper(target, this.tree);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */