// Find of Array of elements Mean using REcursion
function findMean(a,n){
     if(n==1){
        return a[n-1];
     }else{
        return (a[n]+ findMean(a,n-1));
     }
}


let arr=[1,3,5,7,9,11,13,15];
let n= arr.length;
let mean = findMean(arr,n);
console.log("Mean = "+mean);