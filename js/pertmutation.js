var str = ['A','B','C'],
    result = [],
    count=0;
/*参数arr为待全排的数组,len为待全排数组的长度，index为result数组已经排序到第几位*/
function permutation(arr,len,index) {
    //思想就是，首先，遍历数组的每一位，设为a，把a固定为第一位，求剩下数组的元素的全排列；
    //result数组就是a+剩下数组的元素的全排列；
    //剩下数组元素的全排求法与上相同；
    if(len==1){
        result.push(arr[0]);
        // count++;
        console.log(result);
        return;
    }
    else{
        for(let i = 0;i<len;i++){
            result.push(arr[i]);
            result = result.concat(permutation((arr.slice(0,i)?arr.slice(0,i):[]).concat(arr.slice(i+1)),len-1,index+1));
            result=result.slice(0,index)?result.slice(0,index):[];
        }
    }
}
permutation(str,str.length,0);