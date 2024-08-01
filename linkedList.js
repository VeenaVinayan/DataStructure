//create and inplement Linked List 
class Node{
    constructor(data){
         this.data = data;
         this.next=null;
    }
}
function displayList(head){
     if(head === null){
        console.log("Empty List")
     }else{
        let node =head;
        while(node!=null){
             console.log(node.data);
             node=node.next;
        }
     }
}


const head = new Node(50);
head.next = new Node(20);
head.next.next = new Node(120);
head.next.next.next=new Node(100);

displayList(head);

