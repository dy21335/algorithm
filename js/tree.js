/*输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。*/
 /*function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function reConstructBinaryTree(pre, vin)
{
    if (pre.length==0||vin.length==0)
        return null;
    let treenode = new TreeNode(pre[0]);
    if (pre.length==1||vin.length == 1){
        return treenode;
    }


    let index = vin.indexOf(pre[0]);
    let lpre = pre.slice(1,index +1 );
    let lvin = vin.slice(0,index);
    //console.log(lvin);
    treenode.left = reConstructBinaryTree(lpre,lvin);
    let rpre = pre.slice(index+1);
    let rvin = vin.slice(index+1);
   // console.log(rvin)
    treenode.right = reConstructBinaryTree(rpre,rvin);
    return treenode;
}


var resultTree = reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]);
//console.log(resultTree.left.left.right.val);
*/