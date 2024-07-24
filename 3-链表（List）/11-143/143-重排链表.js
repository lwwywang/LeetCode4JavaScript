/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
//先求中点（用快慢指针）
let middle = middleList(head);
//然后反转列表
let reversed = reverseList(middle.next);
middle.next = null;
//最后合并两个列表
mergeList(head, reversed);
};

var middleList = function(head) { 
    if(head === null){
        return null;
    }

    let fast = head.next;
    let slow = head;
 
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
  };

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

var mergeList = function(head1, head2) { 
    let dummyNode = new ListNode(-1);
    let index = 0;
    while(head1 !== null && head2 !== null){
        if(index % 2 === 0){
            dummyNode.next = head1;
            head1 = head1.next;
        }else{
            dummyNode.next = head2;
            head2 = head2.next;
        }
        dummyNode = dummyNode.next;
        index++;
    }

    if(head1 !== null){
        dummyNode.next = head1;
    }

    if(head2 !== null){
        dummyNode.next = head2;
    }

    return dummyNode.next;
 }

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
reorderList(head);
console.log(printList(head)); // 应该打印重排后的链表：1 -> 5 -> 2 -> 4 -> 3