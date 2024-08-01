// Sum of n natural numbers using Recursion
function nSum(n){
     if( n<= 1){
         return 1;
     }else{
        return n+nSum(n-1);
     }
}

console.log("Sum = ",nSum(25));