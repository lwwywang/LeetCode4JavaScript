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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null){
        return true;
    }
    
    //Divide and conquer
    let leftBalanced = isBalanced(root.left);
    let rightBalanced = isBalanced(root.right);

    //Combine
    let finalResult = combineHeight(leftBalanced, rightBalanced, root)

    return finalResult;

};

var getHeight = function(root) {
    if(root === null) {
        return 0;
    }
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
};

var combineHeight = function(leftBalanced, rightBalanced, root) {
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    let gapHeight = Math.abs(leftHeight - rightHeight);

    return leftBalanced && rightBalanced && (gapHeight <= 1);
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

console.log(isBalanced(root)); // Output: true