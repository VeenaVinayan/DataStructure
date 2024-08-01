// Reverse a number
function reverseNumber(n){
     if(n<10){
          return n;
     }else{
         let f=n%10;
         return f.toString()+reverseNumber(Math.floor(n/10));
     }
}

console.log("Reverse of a Number ::");
console.log(reverseNumber(10));