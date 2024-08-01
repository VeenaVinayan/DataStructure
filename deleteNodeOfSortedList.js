// Delete node of sorted Sorted lInked list

class Node{
    constructor(data){
          this.data=data;
          this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
    append(value){
      let node = new Node(value);
      if(!this.head){
         this.head=node;
         return;
      }
      node.next=this.head;
      this.head=node;
   }
   displayList(){
      let node =this.head;
      while(node){
         console.log(node.data);
         node=node.next;
      }
   }
   deleteDuplicate(){
      let prev=this.head
      let node = this.head.next;
      while(node){
       if(prev.data === node.data){
            prev.next=node.next;
            node=node.next;
         }else{
            prev=node;
            node=node.next;
         }
        
      }
   }
}

let list=new LinkedList();
list.append(25);
list.append(30);
list.append(35);
list.append(40);
list.append(45);
list.append(55);
list.append(55);
list.append(60);
list.append(60);
list.append(60);
list.append(100);

list.displayList();
list.deleteDuplicate();
console.log("After Deletion");
list.displayList();
