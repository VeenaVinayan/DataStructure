// Implement doubly linked list
class Node{
    constructor(value){
         this.data=value;
         this.next=null;
         this.prev=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node; 
        }
    }
    display(){
        let node=this.head;
        if(this.isEmpty()){
           console.log("List Empty");
        }else{
            while(node!=null){
                console.log(node.data);
                node=node.next;
            }
        }
    }
   
    
const list=new LinkedList();
list.prepend(50);
list.prepend(40);
list.prepend(10);
list.prepend(100);
console.log("List Elements ::");
list.display();
console.log("List Elements after reverse::");
list.reverse();