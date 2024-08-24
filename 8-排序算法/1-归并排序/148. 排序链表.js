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
    //归并法把链表无限二分
    let mid = getMid(head);
    let right = mid.next;
    mid.next = null; // 先将链表分成两部分

    // 递归调用
    let left = sortList(head);
    right = sortList(right);

    // 合并有序链表
    return merge(left, right);
};

// 快慢指针
function getMid(head) {
    let slow = head;
    let fast = head.next;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

// 合并两个有序链表
function merge(left, right) {
    let dummy = new ListNode(0);
    let cur = dummy;

    while(left !== null && right !== null) {
        if (left.val < right.val) {
            cur.next = left;
            left = left.next;
        } else {
            cur.next = right;
            right = right.next;
        }
        cur = cur.next;
    }

    if (left !== null) {
        cur.next = left;
    }else if (right !== null) {
        cur.next = right;
    }

    return dummy.next;
}

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