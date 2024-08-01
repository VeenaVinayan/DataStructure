// Ductch National Flag Problem
let values = [0,2,0,1,2,2,1,1,0,2,0,1,2];
let high = values.length-1;
let mid=0;
let low=0;
let temp;
while(mid<=high){
     if(values[mid] === 2){
           temp = values[mid];
           values[mid]=values[high];
           values[high] =temp;
           high--;
           
     }else if(values[mid] ===0){
         temp=values[mid];
         values[mid]=values[low];
         values[low]=temp;
         low++;
         mid++;
     }else{
        mid=mid+1;
     }
}
console.log("Solution");
values.map(val => console.log(val));