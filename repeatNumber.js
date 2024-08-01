//find missing and repeating Number

function repaetNumber(arr){
  let n=arr.length-1;
  let temp=[];
  for(let i=0;i<n;i++){
       temp[arr[i]-1]=arr[i];
  }
}

let arr=[1,2,3,];