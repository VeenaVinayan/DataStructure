// Doubly linked list
class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}
function createNode(data){
     if(head === null){
          head = new Node(data);
      }else{
        let node=new Node(data);
        node.next=head;
        head.prev=node;
        head=node;
     }
}
function displayList(head){
     let node = head;
     console.log("List is");
     while(node!=null){
         console.log(node.data);
         node=node.next;
     }
}
function displayBackList(head){
    console.log("Backward lising");
    let node = head;
    while(node.next!=null){
         node=node.next;
    }
    while(node!=null){
        console.log(node.data);
        node=node.prev;
    }
}
let head=null;
createNode(100);
createNode(50);
createNode(10);
createNode(68);
createNode(150);
//forward listing
displayList(head);
//backward listing..
displayBackList(head);