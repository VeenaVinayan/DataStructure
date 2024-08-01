// An array consist of 1's 0's 2's arrange 012 format

let values =[1,1,1,0,0,0,2,2,0,];

values.sort((a,b) => a-b);
console.log("Formatted Array ");
values.map(val => console.log(val));