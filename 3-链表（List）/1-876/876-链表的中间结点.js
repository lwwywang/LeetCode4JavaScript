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
var middleNode = function(head) {
    let fast = head;
    let slow = head;

    while(fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    if (fast.next !== null){
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

const list = createLinkedList([1, 2, 3, 4, 5]);

console.log(middleNode(list)); 