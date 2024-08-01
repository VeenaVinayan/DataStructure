class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function createNode(value){
    console.log("Insert node");
    let node =new Node(value);
    if(head === null){
        head=node;
    }else{
       node.next=head;
       head=node;
    }
}
function displayNode(){
    console.log("Elements are ");
    let node = head;
    while(node!=null){
        console.log(node.data);
        node = node.next;
    }
}
function insertBegin(value){
    let node = new Node(value);
    node.next=head;
    head=node;
}

let head= null;

createNode(50);
createNode(150);
createNode(250);
createNode(350);
createNode(450);
createNode(5);
insertBegin(25);

displayNode();