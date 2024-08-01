// Find peak element in an array

function peakElement(arr){
   for(let i=1;i<arr.length-1;i++){
        if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
            console.log(arr[i]);
        }
   }
}

let arr=[2,3,11,34,14,6,21,32,6,500];
peakElement(arr);
