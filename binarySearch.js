//Implement Binary Search
function binarySearch(arr,key){
     let beg=0;
     let end=arr.length-1;
     let mid;
     while(beg<=end){
        mid=Math.floor((beg+end)/2);
        if(arr[mid]===key){
            return mid;
        }else if(arr[mid]<key){
             beg=mid+1;
        }else{
             end=mid-1
        }
     }
     return -1;
} 

const list=[4,8,10,12,15,20,24,30,34,45,50,85];
let pos=binarySearch(list,45);
if(pos>=0){
    console.log("Item found at",pos);
}else{
    console.log("Item not found!!");
}
