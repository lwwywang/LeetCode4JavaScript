/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null || head.next === null){
        return false;
    }
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow){
            return true;
        }
    }
    return false;
}

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

const head = createLinkedList([3,2,0,-4]);
head.next.next.next.next = head.next;
console.log(hasCycle(head)); // true