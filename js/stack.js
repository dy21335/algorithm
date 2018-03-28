/*用两个栈来实现一个队列，完成队列的Push和Pop操作。
 队列中的元素为int类型。*/
var stack1 = [];
var stack2 = []
function push(node)
{
   stack1.push(node);
}
function pop()
{
    if(stack2.length == 0){
        if(stack1.length == 0){
            return false;
        }
        while(stack1.length){
            let val = stack1.pop();
            stack2.push(val);
        }
    }

    return stack2.pop();
}

push(2);
push(3);
push(4);
console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());