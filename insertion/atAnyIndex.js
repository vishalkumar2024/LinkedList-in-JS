
// Inserting new node to a particular index //
function node(data) {
    this.data = data;
    this.next = null;
}

let head = new node(13) //creating the nodeds
let m1 = new node(26)
let m2 = new node(39)
let tail = new node(52)

head.next = m1; // placing the nodes
m1.next = m2;
m2.next = tail;

let newNode = new node("JavaScript");

function insertIdx(head, newNode, target) { //function to insert the newNode node to the index
    let current = head;
    let idx = 0;
    while (current != null && idx != target - 1) {
        current = current.next;
        idx++;
    }
    let temp = current.next; //Storing the address of next of current nodes 
    current.next = newNode; //newNode holding the info from left side 
    newNode.next = temp;   //newNode  holding the info from right side
}

function traverse(head) {
    let current = head;
    while (current != null) {
        console.log(current.data)
        current = current.next;
    }
}

insertIdx(head, newNode, 2);
traverse(head);