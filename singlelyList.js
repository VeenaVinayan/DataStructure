//Singely Linked list 
class Node{
    constructor(data){
        this.data =data;
        this.next = null;
    }
}

function createList(value){
  if(HEAD===null){
      let node =new Node(value);
      HEAD=node;
  }else{
     let node= new Node(value);
     node.next=HEAD;
        HEAD=node;
  }
}
function displayList(head){
  let node =head;
  console.log("Values are ::");
  while(node!=null){
       console.log(node.data);
       node=node.next;
  }
}
function displayReverse(head){
     if(head===null){
        return 
     }else{
        displayReverse(head.next);
        console.log(head.data);
     }
}

let HEAD = null;
createList(20);
createList(30);
createList(40);
createList(50);
createList(10);
createList(70);
createList(100);
displayList(HEAD);
let node=HEAD;
console.log("List In Reverse Order!!");
displayReverse(node);