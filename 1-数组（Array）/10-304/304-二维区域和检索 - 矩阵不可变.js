/**
 * @param {number[][]} matrix
 */

//var prefixSum = new NumMatrix(matrix)
var NumMatrix = function(matrix) {
    //this.matrix = matrix;
    if(matrix == null || matrix.length == 0){
        this.prefixSum = null;
    }
    if(matrix[0] == null || matrix[0].length == 0){
        this.prefixSum = null;
    }
    let m = matrix.length;
    let n = matrix[0].length;
    this.prefixSum = Array.from({ length: m }, () => new Array(n + 1).fill(0));

    for(let i=0; i<m; i++){
        for (let j=0; j<n; j++)
        //按行求前缀和
        this.prefixSum [i][j+1] = this.prefixSum [i][j] + matrix [i][j];
    }

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if(row1 > row2 || col1 > col2){
        return -1;
    }
    let sum = 0;
    for(let i = row1; i <= row2; i++){
            //interval[col1][col2] = prefixSum[col2+1] - prefixSum[col1]
            sum += this.prefixSum[i][col2+1] - this.prefixSum[i][col1];;
    }
    return sum;

};

const prefixSum = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);
console.log(prefixSum.sumRegion(2,1,4,3)); // 8
console.log(prefixSum.sumRegion(1,1,2,2)); // 11
console.log(prefixSum.sumRegion(1,2,2,4)); // 12