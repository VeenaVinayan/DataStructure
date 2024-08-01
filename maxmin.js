// find maximum and minimum elemets of the array
const rl = require('readline-sync');
//let values = [10,6,-9,11,33,89,75];
console.log('Enter array elemets |||');
let input=rl.question('Input values separated by space:');
let values = input.split(' ').map(Number);
console.log("Array Elements are ::");
values.forEach(val =>{
    console.log(val);
});
console.log("Using Arrat checking method !!");
const {maxi,mini} =findMaxMin(values);
console.log(`Minimum :: ${mini} Maximum ::${maxi}`);
console.log("Using sort method!!");
const{min,max }= findMaxMinSort(values);
console.log(`Minimum :: ${min} Maximum ::${max}`);

function findMaxMin(arr){
        console.log("FUNCTION MAXMIN !");
        let max =arr[0];
        let min=arr[0];
        for(let i=1;i<arr.length;i++){ 
                if(arr[i]>max){
                    max=arr[i];
                }
                if(arr[i]<min){
                    min = arr[i];
                }
        }
         return{ maxi :max, mini:min};
}
function findMaxMinSort(arr){
     arr.sort((a,b) => b - a);
     console.log("values ")
     return { min :arr[0] , max: arr[arr.length-1]};
}