// 输入一个链表，输出该链表中倒数第k个结点。






function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindKthToTail(head, k)
{
    //注意边界判断
    if(head && k>0){
        var current = head;
        for(let i = 1; i < k; i++){
            if(current.next == null)
                return false;
            else {
                current = current.next;
            }
        }
        while (current.next != null){
            head = head.next;
            current = current.next;
        }
        return head.val;
    }
}

var link = new ListNode(3);
link.next = new ListNode(4);
link.next.next = new ListNode(5);
link.next.next.next = new ListNode(6);

console.log(FindKthToTail(link, 5));