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
var deleteDuplicates = function(head) {
    if(head === null){
        return null;
    }

    let dummyNode = new ListNode(-1);  
    dummyNode.next = head;
    let node = dummyNode;

    while(node !== null && node.next !== null && node.next.next !== null){
        if(node.next.val === node.next.next.val){
            let val = node.next.val;
            while(node.next !== null && node.next.val === val){
                node.next = node.next.next;
            }
        } else{
            node = node.next;
        }
    }

    return dummyNode.next;
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

let head = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3)))));
console.log(printList(deleteDuplicates(head))); // 2 -> 3