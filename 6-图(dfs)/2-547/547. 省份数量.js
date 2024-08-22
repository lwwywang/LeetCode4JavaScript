/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let count = 0;
    let n = isConnected.length;

    //构建图
    let graph = new Array(n).fill(0).map(() => new Array()); //初始化图
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if (isConnected[i][j]){
                graph[i].push(j);
                graph[j].push(i);
            }
        }
    }

    //遍历图
    let visited = new Array(n).fill(false);
    for (let i = 0; i < n; i++){
        if (!visited[i]){
            dfs(graph, i, visited);
            count++;
        }
    }

    return count;
};

function dfs (graph, i, visited){
    visited[i] = true;
    for (let j of graph[i]){
        if (!visited[j]){
            dfs(graph, j, visited);
        }
    }
}

// 测试用例
let isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
];
console.log(findCircleNum(isConnected)); // 2