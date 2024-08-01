// Circular List
class Node{
    constructor(data){
        this.data = data;
        this.next=null;
    }
}

function createNode(value){
     let node = new Node(value);
      if(head === null){
          head = node;
          tail=head;
          tail.next = head;
      }else{
          tail.next=node;
          node.next =head;
          head= node;
      }
}
function displayNode(head){
    let node= head;
     do{
         console.log(node.data);
         node=node.next;
     }while(node!=head)
}

let head = null;
let tail = null;
createNode(20);
createNode(40);
createNode(60);
createNode(80);
createNode(100);
console.log("LIst is ");
displayNode(head);