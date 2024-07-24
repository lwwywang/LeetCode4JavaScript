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
var reverseList = function(head) {
    if(head === null){
        return null;
    }
    let prev = null;

    while(head !== null){
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

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

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(printList(head)); // 1 -> 2 -> 3 -> 4 -> 5
const reversedHead = reverseList(head);
console.log(printList(reversedHead)); // 5 -> 4 -> 3 -> 2 -> 1
