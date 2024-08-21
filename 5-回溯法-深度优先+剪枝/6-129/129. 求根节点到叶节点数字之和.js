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

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var sumNumbers = function(root) {
    let res = [];

    if (root === null) {
        return 0;
    }

    let list = [];

    helper(res, list, root);

    let sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += parseInt(res[i], 10);
    }
    return sum;
};

function helper(res, list, root) {
    list.push(root.val);

    if (root.left === null && root.right === null) {
        res.push(list.join(''));
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

console.log(sumNumbers(root)); // 输出: 138
