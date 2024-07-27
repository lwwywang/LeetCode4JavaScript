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
var maxDepth = function(root) {
    let depth = { value: 0 };
    if(root === null) {
        return depth;
    }
    helper(root, 1, depth);
    return depth;
};

var helper = function(root, currentDepth, depth) {
    if(root === null) {
        return;
    }
    //当前深度 > depth，更新
    if(currentDepth > depth.value) {
        depth.value = currentDepth;
    }
    //递归左右子树  
    helper(root.left, currentDepth + 1, depth);
    helper(root.right, currentDepth + 1, depth);
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

console.log(maxDepth(root)); // Output: 3