// Find sum of n elements in the array

function sumOfArray(a,n){
    if(n===0){
        return a[0];
    }else{
        return a[n]+sumOfArray(a,n-1);
    }
}
const a=[1,2,3,4,5,6,7,8,9,10];
console.log("Sum= "+sumOfArray(a,a.length-1));