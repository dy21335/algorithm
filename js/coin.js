function solution(n1, n2, target) {
    var f = [];
    f[0] = 1;

}

solution(int[] n1, int[] n2, int target){

    long[] f = new long[target + 1];

    f[0] = 1;




    HashSet<Integer> set = new HashSet<>();
    for(int i : n2){
        set.add(i);
    }


    for(var i = 0; i < n1.length; i++){
        for(int j = target; j >= n1[i]; j--){
            for(int k = 1; k * n1[i] <= j; k++){
                f[j] = f[j] + f[j - k * n1[i]];
                if(set.contains(k * n1[i])){
                    f[j]++;

                }
            }
        }

    }

    int r = (int)(f[target] % 1000000007);
    return r;

}