// print 1 to N numbers using recursion Descending Order 
// print after recursive call Descending Order

function printN(n){
     if(n>0){
         console.log(n);
         printN(n-1); 
    }
    return; 
}
printN(10);