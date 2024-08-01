// Replace the character of a string with n th character

let str="abcdefghijklmnopqrstuvwxyz";
let res='';
let n=4;
let index;
for(let i=0;i<str.length-1;i++){
     res+=str[(i+n)%26];
}
console.log("string ::"+res);