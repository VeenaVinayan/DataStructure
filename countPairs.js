//Count pairs with give sum
function findSumPairCount(arr,k){
    let count=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
              sum=arr[i]+arr[j];
              if(sum === k){
                  count++;
                  console.log(`(${i},${j})`);
               }
        }
    }
    return count;
}

let arr=[1,2,5,-1,3,6,9];
let k=8;
let count = findSumPairCount(arr,k);
console.log("Count = ",count);