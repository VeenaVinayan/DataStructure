//Reverse the string by word
function reverseStr(str){
    return str.split(' ').reverse().join(' ');
}
//Reverse entire string
function strictReverse(str){
   return str.split('').reverse().join('');
}
console.log(strictReverse("Veena Vinayan"));
console.log(reverseStr("Veena Vinayan"));