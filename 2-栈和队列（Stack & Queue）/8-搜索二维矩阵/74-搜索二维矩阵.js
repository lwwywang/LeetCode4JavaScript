/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    if(matrix == null || matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }

    let row = matrix.length;
    let column = matrix[0].length;

    let start = 0;
    let end = row * column -1;
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);

        let x = Math.floor(mid / column);
        let y = mid % column;
        if(target == matrix[x][y]){
            return true;
        }else if(target > matrix[x][y]){
            start = mid;
        }else{
            end = mid;
        }
    }
    if(matrix[Math.floor(start / column)][start % column] == target || matrix[Math.floor(end / column)][end % column] == target) {
            return true;
    }
    return false
    
};  

const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
const target = 3;
console.log(searchMatrix(matrix, target)); // true