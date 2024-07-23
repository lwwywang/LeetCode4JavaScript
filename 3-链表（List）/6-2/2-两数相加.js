/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode(-1);
    let head = dummyNode;

    //计数进位
    let carry = 0;
    while(l1 !== null && l2 !== null) {
        let num1 = l1.val;
        let num2 = l2.val;
        let sum = num1 + num2 + carry;
        let value = sum % 10;
        carry = Math.floor(sum / 10);
        head.next = new ListNode(value);
        head = head.next;
        l1 = l1.next;
        l2 = l2.next;
    }

    while(l1 !== null) {
        let num1 = l1.val;
        let sum = num1 + carry;
        let value = sum % 10;
        carry = Math.floor(sum / 10);
        head.next = new ListNode(value);
        head = head.next;
        l1 = l1.next;
    }

    while(l2 !== null) {
        let num2 = l2.val;
        let sum = num2 + carry;
        let value = sum % 10;
        carry = Math.floor(sum / 10);
        head.next = new ListNode(value);
        head = head.next;
        l2 = l2.next;
    }

    if(carry != 0){
        head.next = new ListNode(carry);
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


let list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let list2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let mergedList = addTwoNumbers(list1, list2);
console.log(printList(mergedList)); // 应该打印 "7 -> 0 -> 8"

