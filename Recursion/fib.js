function fib(n){
    if(n===1||n===2){
        return 1;
    }else{
        return fib(n-1)+fib(n-2);
    }
}

console.log("Fibonacci number ");
for(i=1;i<10;i++){
    console.log(fib(i));
}