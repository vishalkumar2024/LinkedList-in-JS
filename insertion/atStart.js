
// // Inserting new node to the starting //
function node(data) {
    this.data = data;
    this.next = null;
}

let head = new node(12)
let mid = new node(18);
head.next=mid;
let newNode=new node(6);
newNode.next=head;
head=newNode
console.log(head)