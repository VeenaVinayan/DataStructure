// word count in a string
function countWord(str){
     let s1=str.toLowerCase();
     let count={};
     s1.split(' ').map(s =>{
           if(count[s]){
              count[s]++;
           }else{
            count[s]=1;
           }
     })
     return count;
}
let count =countWord("I am the best the best the best");
console.log("Values:::"+JSON.stringify(count));
