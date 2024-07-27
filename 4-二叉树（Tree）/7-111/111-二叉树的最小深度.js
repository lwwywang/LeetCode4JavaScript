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
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) {
        return 0;
    }

    let leftMinDepth = minDepth(root.left);
    let rightMinDepth = minDepth(root.right);

    if(leftMinDepth === 0){
        return rightMinDepth + 1;
    } else if(rightMinDepth === 0) {
        return leftMinDepth + 1;
    } else {
        return Math.min(leftMinDepth, rightMinDepth) + 1;
    }

};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
};

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(minDepth(root)); // Output: 2