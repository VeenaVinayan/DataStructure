// Implement binary Search

function binarySearch(a,key,low,high){
    let mid= Math.floor((low+high)/2);
    if(low>high){
        return -1;
    }
    if(a[mid]===key){
         return mid;
    }
    if(key>a[mid]){
        return binarySearch(a,key,mid+1,high);
    }else{
      return  binarySearch(a,key,low,mid-1);
    }
}

const a=[1,3,4,6,7,8,10,12,15];
let pos=binarySearch(a,2,0,a.length-1);
if(pos>=0){
    console.log("Item present at :",pos);
}else{
    console.log("Item not present !"); 
}