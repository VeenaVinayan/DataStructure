//Linked List Implementation
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
         const node =new Node(value);
         if(this.isEmpty()){
            this.head=node;
         }else{
            node.next=this.head;
            this.head=node;
         }
         this.size++;
    }
    display(){
        let node= this.head;
        if(this.isEmpty()){
            console.log("List Empty !");
        }else{
            while(node!=null){
                console.log(node.data);
                node=node.next;
           }
        }
       
    }
    reverse(){
        let node=this.head;
        let prev=null;
        if(this.isEmpty()){
           console.log("List Empty !");
        }else{
           while(node){
               let next=node.next;
               node.next=prev;
               prev=node;
               node=next;
            }
           this.head=prev;
         }
        }
   }


const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.prepend(60);
console.log("List ");
list.display();
console.log("List size::",list.getSize());
console.log("Reverse List ");
list.reverse();
list.display();
