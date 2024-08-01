 // using swapping method of interchanging locations.
 process.stdout.write("Array Reversing using Different methods !!");
let arr =[10,20,30,40,50,60];

const n= arr.length;
let temp;
for(let i=0,j=n-1;i<=j;i++,j--){
     temp=arr[i];
     arr[i]=arr[j];
     arr[j]=temp;
     console
}
console.log("Array Elements Reversed using for loop swapping !");
for (let value of arr){
    console.log(value);
}
console.log("using inbuilt function ")
const newArr = arr.slice().reverse();
console.log("Array Elements Reversed using spread operator  !");
for (let value of newArr){
    console.log(value);
}
const a =[40,50,60,70,80,90,100];
const array = [...a].reverse();
console.log("Array Elements Reversed using spread operator  !");
for (let value of array){
    console.log(value);
}