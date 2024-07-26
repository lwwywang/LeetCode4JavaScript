/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(inorder === null || inorder.length === 0 || postorder === null || postorder.length === 0) {
        return null;
    }
    return helper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)

};

var helper= function(inorder, istart, iend, postorder, pstart, pend) {
    if(istart > iend || pstart > pend) {
        return null;
    }
    //1. 在后序里面找root
    let root = new TreeNode(postorder[pend]);
    //2. 在中序里面分清左右
    //a. 找到root在中序里面的位置
    let rootPost = findRootPos(inorder, postorder[pend]);
    //中序左子树位置：【istart, rootPost - 1】
    let leftLens = rootPost - istart;
    root.left = helper(inorder, istart, rootPost - 1, postorder, pstart, pstart + leftLens - 1);
    //中序右子树位置：【rootPost + 1, iend】
    root.right = helper(inorder, rootPost + 1, iend, postorder, pstart + leftLens, pend - 1);
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

const inorder = [9,3,15,20,7];
const postorder = [9,15,7,20,3];
console.log(buildTree(inorder, postorder)); // [3,9,20,null,null,15,7]
