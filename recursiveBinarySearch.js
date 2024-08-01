// Binary Search by recursion
function binarySearch(arr,key,beg,end){
   if(end>=beg){ 
    let mid=(Math.floor(beg+end)/2);
    if(arr[mid]===key){
         return mid;
    }else if(arr[mid]>key){
        return binarySearch(arr,key,beg,mid-1)
    }else { 
        return binarySearch(arr,key,mid+1,end)
    }
    return -1;
   }
}

const arr=[10,14,17,20,25,30,38,45,55,60,75,100];
let n=arr.length-1
let pos = binarySearch(arr,30,0,n);
if(pos>=0){
    console.log(`Item found at ${pos}`);
}else{
    console.log("Item not found!!");
}
