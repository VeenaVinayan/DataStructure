// Insert a node before and after a specific number.
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function createNode(value){
    const node = new Node(value);
    if(head===null){
        head=node;
    }else{
         node.next=head;
         head=node;
    }
}
function displayNode(){
     let node=head;
     while(node!=null){
        console.log(node.data);
        node=node.next;
     }
}
function insertNode(key){
       let node=head;
       let node1=new Node(key+5);
       let node2=new Node(key+12);
       let prev;
       console.log("INsert nodes before and after !!",key);
       while(node!=null){
          if(node.data === key){
              if(node === head){
                   node2.next=node.next;
                   node.next=node2;
                   node1.next=node;
                   head=node1;
                   return;
              }else{
                  node1.next=prev.next;
                  prev.next=node1;
                  node2.next=node.next;
                  node.next=node2;  
                  return; 
              }
          }
          prev=node;
          node=node.next;
    }
}

let head=null;
createNode(1);
createNode(12);
createNode(13);
createNode(14);
createNode(15);
displayNode();
//insert nodes after and before
insertNode(13);
console.log("Display after insertion!!");
displayNode();