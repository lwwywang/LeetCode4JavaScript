/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)){
        let value = this.map.get(key);
        this.map.delete(key); // 删除后，再 set ，相当于更新到 map 最后一位
        this.map.set(key, value);
        return value
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 如果已有，那就要更新，即要先删了再进行后面的 set
    if(this.map.has(key)){
        this.map.delete(key);
    }
    this.map.set(key, value);
    // put 后判断是否超载
    if(this.map.size > this.capacity){
        this.map.delete(this.map.keys().next().value);
    }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// 测试代码
function runLRUCacheOperations(operations, values) {
    let result = [];
    let lruCache;

    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        const value = values[i];

        if (operation === "LRUCache") {
            lruCache = new LRUCache(value[0]);
            result.push(null);
        } else if (operation === "put") {
            lruCache.put(value[0], value[1]);
            result.push(null);
        } else if (operation === "get") {
            result.push(lruCache.get(value[0]));
        }
    }

    return result;
}

const operations = ["LRUCache","put","put","get","put","get","put","get","get","get"];
const values = [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]];

console.log(runLRUCacheOperations(operations, values));