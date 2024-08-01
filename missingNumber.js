// Missing number from alist of sorted numbers
function missingNumber(arr,n){
  for(let i=0;i<n;i++){
     if(arr[i]!= i+1 ){
         return i+1;
     }
  }
}

let arr =[1,2,3,5,6,7,8];
let number = missingNumber(arr,7);
console.log("Missing Number ::",number);