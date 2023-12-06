function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for(let index = 0; index < arr.length; index++){
        if(min > arr[index]){
            min = arr[index];
        }else if(max < arr[index]){
            max = arr[index];
        };
        sum += arr[index];
    };
    let minSum = sum - min;
    let maxSum = sum - max;
    console.log(maxSum + ' ' + minSum);
};

console.log(miniMaxSum([1,2,3,4,5]));