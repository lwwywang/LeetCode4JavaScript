class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(initialCapacity = 53, loadFactor = 0.75) {
        this.capacity = initialCapacity; // 底层初始化容量
        this.loadFactor = loadFactor; // 填装因子
        this.size = 0; // hash map中元素个数
        this.buckets = new Array(this.capacity).fill(null); // 采用数组+链表方式实现
    }

    //构造哈希函数：讲给定的键转换为哈希表中的索引，来确定位置
    _hash(key) {
        let total = 0;// 用于存储最终的哈希值
        let WEIRD_PRIME = 31; // 一个质数，用于减少哈希冲突
        total = (key * WEIRD_PRIME) % this.capacity; //将数字键乘以一个质数，取模操作确保哈希值在哈希表的容量范围内
        return total;
    }

    //基于拉链法实现put
    put(key, value) {
        //计算hash值并由此找到对应的索引
        let index = this._hash(key);
        let newNode = new Node(key, value);

        //如没有节点 直接插入
        if (!this.buckets[index]) {
            this.buckets[index] = newNode;
        } else {
            //如有节点，遍历链表，找到最后一个节点，插入新节点
            let current = this.buckets[index];
            while (current) {
                if (current.key === key) {
                    if (!Array.isArray(current.value)) {
                        current.value = [current.value];
                    }
                    current.value.push(value);
                    return;
                }
                if (!current.next) {
                    current.next = newNode;
                    break;
                }
                current = current.next;
            }
        }

        //更新哈希表大小
        this.size++;
        //如果填装因子大于0.75，进行扩容
        if (this.size / this.capacity > this.loadFactor) {
            this._resize();
        }
    }

    get(key) {
        let index = this._hash(key);
        let current = this.buckets[index];

        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        //没有找到匹配的键
        return undefined;
    }

    remove(key) {
        let index = this._hash(key);
        //查找并删除节点
        let current = this.buckets[index];
        let prev = null;//记录前一个节点

        while (current) {
            if (current.key === key) {
                if (prev) { //不是第一个节点
                    prev.next = current.next;
                } else { //是第一个节点
                    this.buckets[index] = current.next;
                }
                this.size--;
                return current.value;
            }
            prev = current;
            current = current.next;
        }

        return undefined;
    }

    _resize() {
        //保存旧的buckets
        let oldBuckets = this.buckets;

        //扩容
        this.capacity *= 2;

        //重置buckets
        this.buckets = new Array(this.capacity).fill(null);
        this.size = 0;

        for (let bucket of oldBuckets) {
            let current = bucket;
            while (current) {
                this.put(current.key, current.value);
                current = current.next;
            }
        }
    }
}

// 测试代码
let ht = new HashTable();
ht.put(1, "world");
ht.put(2, "world");
console.log(ht.get(1)); // 输出: world
console.log(ht.get(2)); // 输出: world
ht.remove(1);
console.log(ht.get(1)); // 输出: undefined