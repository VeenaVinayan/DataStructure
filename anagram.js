//check the string is anagram

function anagram(str1,str2){
 const s1=cleanSort(str1);
 const s2=cleanSort(str2);  

 function cleanSort(str){
     return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
}
  return s1===s2;
}

console.log("Anagram ::", anagram("man","listen"));