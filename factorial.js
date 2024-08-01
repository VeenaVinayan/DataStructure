//Factorial using recursion
function factorial(n){
    if(n <= 1){
        return 1;
    }else{
       return n*factorial(n-1);
    }
}

let result = factorial(6);
console.log(" Factorial :: " + result);