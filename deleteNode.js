class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function createNode(data){
  let node = new Node(data);
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
function deleteNode(key){
   
   let node = head;
   let prev=head;
   while(node!=null){
      if(key === node.data){ 
        if(head===node){
             head=head.next;
        }else{
            prev.next=node.next;
            console.log("Delete corresponding Node !",key);
            node=node.next;
        }
      }else{
        prev=node;
        node=node.next;
      }
   }

}

let head=null;
createNode(20);
createNode(40);
createNode(60);
createNode(80);
createNode(100);
createNode(800);
createNode(80);
createNode(180);
createNode(80);
createNode(80);
createNode(80);
console.log("List items ::");
displayNode();
deleteNode(80)
   console.log("List items After Deletion::");
displayNode();