//Linked list REversal
class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
             
        }
    }
    reverse(){
        let node=head;
        let next=head.next;
        if(this.isEmpty()){
           console.log("List Empty !");
        }else{
           while(node){
               let next=node.next;
               node.next=prev;
               prev=node;
               node=node.next;
               next=node.next 
           }
           this.head=prev;
         }
        }
   }

