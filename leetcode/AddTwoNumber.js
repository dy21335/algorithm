// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
//     You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//     Example
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


function ListNode(val) {
      this.val = val;
      this.next = null;
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //flag表示是否进位,sum表示每位相加的和；
    //l3是有头结点的结果链表的头指针，last3是尾指针；
    //val1和val2分别记录l1和l2当前节点的值；

    var flag,
        sum,
        l3,
        val1,
        val2,
        last3;
    l3 = new ListNode(0);
    last3 = l3;
    flag = 0;



    while(l1 != null || l2 != null){
        val1 = l1 === null?0:l1.val;
        val2 = l2 === null?0:l2.val;
        sum =val1 + val2 +flag;
        flag = sum>=10?1:0;
        last3.next = new ListNode(sum%10);
        last3 = last3.next;
        l1 = l1 == null?l1:l1.next;
        l2 = l2 == null?l2:l2.next;

    }
    if(flag != 0){
        //最后要检查一下falg是否为0，也就是最高位有没有进位；
        last3.next = new ListNode(1);
    }

    //去掉l3的头结点
    l3 = l3.next;
    return l3;
    // printList(l3,last3)
};



var l1 = new ListNode(1);
l1.next = new ListNode(8);
// l1.next.next= new ListNode(3);

var l2 = new ListNode(0);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);
// printList(l1,l1.next.next);
// printList(l2,l2.next.next);

console.log(addTwoNumbers(l1,l2));





//优化解法;
//主要对l1进行操作，把结果存储在l1中；
//先同时遍历l1和l2,让l1和l2的每个节点值进行相加；
//遍历到l1末尾的时候，再判断l2是否还存在，将l2添加到l1末尾；
//最后l1进行进位调整；