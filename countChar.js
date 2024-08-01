// count occurance of each character

function countCharacter(str){
      let s=str.toLowerCase();
      let count={};
      for(let c of s){
         if(count[c]){
             count[c]++;
         }else{
            count[c]=1;
         }
      }
      return count;
}
console.log(countCharacter("Veena Vinayan"));