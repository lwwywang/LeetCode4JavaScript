/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let first = dummyNode;
    let second = dummyNode;
    
    for(let i = 0; i < n + 1; i++) {
        first = first.next;
    }
    
    while(first !== null) {
        first = first.next;
        second = second.next;
    }
    
    second.next = second.next.next;
    
    return dummyNode.next;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
};

function printList(node) {
    let result = '';
    while (node !== null) {
        result += node.val.toString();
        if (node.next !== null) {
            result += ' -> ';
        }
        node = node.next;
    }
    return result;
}

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(printList(removeNthFromEnd(head, 2))); // 1 -> 2 -> 3 -> 5