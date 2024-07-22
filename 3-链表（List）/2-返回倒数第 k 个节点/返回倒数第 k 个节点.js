/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    if(head === null){
        return null;
    }

    let fast = head;
    let slow = head;
    let index = k - 1;

    while(index-- !== 0 && fast.next !== null){
        fast = fast.next;
    }

    while(fast !== null && fast.next !== null){
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function createLinkedList(arr) {
    let head = new ListNode(0); 
    let current = head;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return head.next;
}

let head = createLinkedList([1,2,3,4,5]);
console.log(kthToLast(head, 2).val); // 4