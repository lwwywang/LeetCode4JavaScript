/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null && list2 === null) {
        return null;
    }

    let dummyNode = new ListNode(-1);
    let head = dummyNode;

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val){
            head.next = list1;
            list1 = list1.next;
        } else{
            head.next = list2;
            list2 = list2.next;
        }
        head = head.next;
    }

    if(list1 !== null){
        head.next = list1;
    } else{
        head.next = list2;
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

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(list1, list2);
console.log(printList(mergedList)); // 应该打印 "1 -> 1 -> 2 -> 3 -> 4 -> 4"