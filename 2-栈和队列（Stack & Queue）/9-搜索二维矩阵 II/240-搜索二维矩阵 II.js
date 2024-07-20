/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix === null || matrix.length == 0 || matrix[0].length == 0 || matrix[0] === null){
        return false;
    }
    //右上角的坐标为（0，m-1），向左递减，向下递增
    //左下角的坐标为（n-1，0），向右递增，向上递减
    let m = matrix[0].length - 1;
    let n = matrix.length - 1;

    let x = 0;
    let y = m - 1;

    while(x < n && y >= 0){
        if(matrix[x][y] == target){
            return true;
        }else if(matrix[x][y] > target){
            y--;
        }else{
            x++;
        }
    }
    return false;
};

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
const target = 5;
console.log(searchMatrix(matrix, target)); //true