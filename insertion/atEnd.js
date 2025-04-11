
//  Inserting new node to the end //
function node(data) {
    this.data = data;
    this.next = null;
}
function insertNode(newNode, head) { // go to the last node through current variable
    let current = head;
    while (current.next != null) {
        current = current.next;
    }
    current.next = newNode;
}

function traversal(head) { // traverse to the entire linkedList and print the data of all nodes, the newNode has inserted to the last as tail successfully 
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}


let head = new node(12)
let mid = new node(18);
let tail = new node(24);
head.next = mid;
mid.next = tail;
let newNode = new node("JavaScript") //node which has to be inserted to the last of linkedList

insertNode(newNode, head);
traversal( head);

