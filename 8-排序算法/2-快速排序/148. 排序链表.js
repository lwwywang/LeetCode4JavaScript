/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var sortList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let pivot = head.val;
    let node = head.next;
    let lowNodeDummy = new ListNode(-1);
    let lowNode = lowNodeDummy;
    let highNodeDummy = new ListNode(-1);
    let highNode = highNodeDummy;

    while (node !== null) {
        if (node.val < pivot) {
            lowNode.next = node;
            lowNode = lowNode.next;
        } else {
            highNode.next = node;
            highNode = highNode.next;
        }
        node = node.next; // 需要移动到下一个节点
    }
    
    // 断开 highNode 的连接
    highNode.next = null;
    // 断开 lowNode 的连接
    lowNode.next = null;

    // 递归排序 lowNode 和 highNode
    let sortedLow = sortList(lowNodeDummy.next);
    let sortedHigh = sortList(highNodeDummy.next);

    // 连接排序后的 lowNode、pivot 和 highNode
    let sortedList = new ListNode(-1);
    let current = sortedList;

    // 连接 sortedLow
    current.next = sortedLow;
    while (current.next !== null) {
        current = current.next;
    }

    // 连接 pivot
    current.next = head;
    head.next = sortedHigh;

    return sortedList.next;
};




// 测试代码
let head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);

let sortedHead = sortList(head);

// 打印排序后的链表
let current = sortedHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}