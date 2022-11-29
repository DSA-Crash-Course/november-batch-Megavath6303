//Task -1 is to creat the file as app.js
//Task -2 Two sum using the sorting and two pointer
let TwoSumm = (Array,Target) => {
    let left = 0;                                   // pointer 1
    let right = Array.length-1;                     // pointer 2
    while(left<right){                              // left pointer should be greater than right pointer
        if(Array[left]+Array[right] == Target){     //sum is equal to target rerun true ,if not move the pointer as we required
            return true;
        }else if(Array[left]+Array[right]<Target){
            left++;
        }else{
            right--;
        }
    }
    return false;
}
let Array = [1,2,3,4,5];
let Target = 9;
console.log(TwoSumm(Array,Target));

//Task -3 kadan's algorithm to caluculate sum of the subarray
const MaxSum =(array) => {
    let n = array.length;
    let ans = -10000;
    let CurrentSum = 0;
    for(let i=0;i<n;i++){
        CurrentSum = Math.max(CurrentSum+array[i],array[i]); // compairing the values in a array and return the max value 
        ans = Math.max(ans,CurrentSum);                      // compairing the sum ofsubarrays and return the greate value 
    }
    return ans;
}
console.log(MaxSum([-2,1,-3,4,-1,2,1,-5,4]));