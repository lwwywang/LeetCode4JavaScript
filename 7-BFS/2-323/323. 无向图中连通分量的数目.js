/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let count = 0;

    //构造图
    let graph = new Array(n).fill(0).map(() => new Array()); //初始化图
    for(let [x,y] of edges){
        graph[x].push(y);
        graph[y].push(x);
    }

    //遍历图
    let visited = {};
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            bfs(graph, i, visited);
            count++;
        }
    }

    return count;
};

function bfs (graph, i, visited){
    let queue = [];
    queue.push(i);
    visited[i] = true;

    while(queue.length !== 0){
        let node = queue.shift();
        for(let neighbor of graph[node]){
            if(!visited[neighbor]){
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
};


let n = 5, edges = [[0, 1], [1, 2], [3, 4]]
console.log(countComponents(n, edges)) // 2