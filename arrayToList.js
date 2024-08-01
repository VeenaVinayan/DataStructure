// Convert an Array to List
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function createNode(data){
     let node = new Node(data);
     if(head === null){
        head=node;
     }else{
        node.next=head;
        head=node; 
     }
}
function displayNode(head){
    let node = head;
    while(node!=null){
         console.log(node.data);
         node=node.next;
    }
}

let head=null;
let arr=[10,20,30,40,50,60,70,80,90,100];
for(const num of arr){
     createNode(num);
}
console.log("List Elements ::");
displayNode(head);