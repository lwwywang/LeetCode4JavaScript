/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let count = 0;

    //构建图
    let graph = new Array(n).fill(0).map(() => new Array()); //初始化图
    for(let [x, y] of edges){
        graph[x].push(y);
        graph[y].push(x);
    }
        
    //遍历图
    let visited = {};
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

let n = 5, edges = [[0, 1], [1, 2], [3, 4]]
console.log(countComponents(n, edges)) // 2