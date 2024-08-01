// program to cyclically rotate by 1

function arrayRotateByOne(arr){
    let n= arr.length;
    let last = arr[n-1];
    for(i=n-1;i>0;i--){
         arr[i] =arr[i-1];
    }
    arr[0]=last;
    console.log("Array Elements ::");
    arr.map(val => console.log(val));
}

let arr = [3,2,30,5,6,1];
arrayRotateByOne(arr);