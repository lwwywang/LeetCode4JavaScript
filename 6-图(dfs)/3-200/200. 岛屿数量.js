/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let answer = 0;
    if (grid === null || grid.length === 0 || grid[0] === null || grid[0].length === 0) {
        return 0;
    }

    let m = grid.length;
    let n = grid[0].length;
    let visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 如果是岛屿
            if (grid[i][j] === '1' && !visited[i][j]) { 
                answer++;
                dfs(grid, visited, i, j);
            }
        }
    }

    return answer;
};

function dfs(grid, visited, x, y) {
    visited[x][y] = true;
    if (grid[x][y] === '0') {
        return;
    }

    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    for (let i = 0; i < 4; i++){
        let newX = x + dx[i];
        let newY = y + dy[i];
        if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length){
            if (grid[newX][newY] === '1' && !visited[newX][newY]) {
                dfs(grid, visited, newX, newY);
            }
        }
    }
}

let grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
console.log(numIslands(grid)); // 1