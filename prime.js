//Find prime number using Recursion method
function prime(n,d=2){
   if(n<2)return 2;
   if(n===d) return true;
   if(n%d ===0) return false; 
   return prime(n,d+1);
}

if(prime(50)){
     console.log("Prime Number !!");
}else{
    console.log("Not a prime Number !!");
}