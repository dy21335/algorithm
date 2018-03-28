var arr = [2,4,6,2,7,8];
function multiquickSort(arr,low,high) {
    if(low<high) {
        let pivotIndex = quickSort(arr, low, high);
        multiquickSort(arr, low, pivotIndex-1);
        multiquickSort(arr, pivotIndex+1, high);
    }
    else{
        return ;
    }
}

function swap(arr, indexa,indexb) {
    let tmp = arr[indexa];
    arr[indexa] = arr[indexb];
    arr[indexb] = tmp;
}
function quickSort(arr,low,high) {
    let pivot = arr[low];
    high+=1;
    index = low;
    while(true){
        while(arr[--high]>pivot){
            if(high == low) break;
        }

        while(arr[++low] < pivot){
            if(high == low) break;
            }
        if(low>=high) break;
        swap(arr,low,high);
    }
    // arr[low] = pivot;
    swap(arr, index, high);
    return high;
}

multiquickSort(arr,0,arr.length-1);
console.log(arr);