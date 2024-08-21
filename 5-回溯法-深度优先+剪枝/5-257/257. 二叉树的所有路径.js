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
 * @return {string[]}
 */

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var binaryTreePaths = function(root) {
    let res = [];

    if (root === null) {
        return null;
    }

    let list = [];

    helper(res, list, root);

    return res;
};

function helper(res, list, root) {
    list.push(root.val);

    if (root.left === null && root.right === null) {
        res.push(list.join('->'));
    } else {
        if (root.left !== null) {
            helper(res, list, root.left);
        }
        if (root.right !== null) {
            helper(res, list, root.right);
        }
    }

    list.pop();
}

// 构建二叉树
let root = new TreeNode(1);
root.left = new TreeNode(2, null, new TreeNode(5));
root.right = new TreeNode(3);

console.log(binaryTreePaths(root)); // 输出: ["1->2->5", "1->3"]