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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];

    if (root === null) {
        return result;
    }

    //创建队列
    let queue = [];

    //把根结点放入队列
    queue.push(root);

    //while遍历队列
    while (queue.length !== 0) {
        let size = queue.length;
        let level = [];

        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if(node.left !== null) {
                queue.push(node.left);
            }
            if(node.right !== null) {
                queue.push(node.right);
            }
        }
        result.push(level);
    }

    return result;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let root = new TreeNode(3);
let node1 = new TreeNode(9);
let node2 = new TreeNode(20);
let node3 = new TreeNode(15);
let node4 = new TreeNode(7);
root.left = node1;
root.right = node2;
node2.left = node3;
node2.right = node4;
console.log(levelOrder(root)); // [[3], [9, 20], [15, 7]]