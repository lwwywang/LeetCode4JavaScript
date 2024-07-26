/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder === null || preorder.length === 0 || inorder === null || inorder.length === 0) {
        return null;
    }
    return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};

var helper = function(preorder, pstart, pend, inorder, istart, iend) {
    if(istart > iend || pstart > pend) {
        return null;
    }
    //1. 在前序里面找root
    let root = new TreeNode(preorder[pstart]);
    //2. 在中序里面分清左右
    //a. 找到root在中序里面的位置
    let rootPost = findRootPos(inorder, preorder[pstart]);
    //中序左子树位置：【istart, rootPost - 1】
    let leftLen = rootPost - istart;
    root.left = helper(preorder, pstart + 1, pstart + leftLen, inorder, istart, rootPost - 1);
    //中序右子树位置：【rootPost + 1, iend】
    root.right = helper(preorder, pstart + leftLen + 1, pend, inorder, rootPost + 1, iend);
    return root;
}; 

var findRootPos = function(inorder, root){
    for(i=0; i < inorder.length; i++) {
        if(inorder[i] === root) {
            return i;
        }
    }
    return -1;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}   

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];
console.log(buildTree(preorder, inorder)); // [3,9,20,null,null,15,7]