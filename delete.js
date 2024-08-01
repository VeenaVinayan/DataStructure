

function deleteNode(){
    let size= this.getSize();
    let node=this.head;
    let prev;
    for(let i=1;i<size/2;i++){
        prev=node;
        node=node.next;
    }
    prev.next=node.next;
    this.size--;
}