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
 * @return {number[]}
 */
var postorderTraversal = function(root, result = []) {
    if (root === null) {
        return;
    }
    
    let stack1 = [];
    let stack2 = [];
    stack1.push(root);
    
    while (stack1.length > 0) {
        let node = stack1.pop();
        stack2.push(node.val);
        if (node.left !== null) {
            stack1.push(node.left);
        }
        if (node.right !== null) {
            stack1.push(node.right);
        }
    }

    while(stack2.length > 0) {
        result.push(stack2.pop());
    }
    
    return result;
};

function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}   

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(postorderTraversal(root)); // [3, 2, 1]