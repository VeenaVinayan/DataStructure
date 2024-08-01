// implement linear Search
function linearSearch(list,key){
  for(const num of list){
    if(num === key){
        return true;
    }
  }
}
const list = [12,34,43,2,67,8,90,45,10,30];
if(linearSearch(list,90)){
     console.log("Item is present");
}else{
    console.log("Not present !!");
}
