
// // Inserting new node to the starting //
function node(data) {
    this.data = data;
    this.next = null;
}

let head = new node(12)
let mid = new node(18);
head.next=mid;
let newNode=new node("JavaScript");
newNode.next=head;
head=newNode

function traversal(head) { 
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}

traversal(head);