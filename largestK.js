// find kth largest 

let values = [1,2,3,7,9,-1,100,8];
const large = findLargest(values,5);
console.log(`Largest :: ${large}`);
function findLargest(values,k){
     values.sort((a,b) => b - a);  
     return(values[k-1]);
}