
// Inserting new node to the starting //
function insertion(head, newNode) {

    newNode.next = head;
    head = newNode;

    let current = head;
    let res="";
    while (current != null) {
       res+=current.data+" ";
        current = current.next;
    }
    return res;
}

function node(data) {
    this.data = data;
    this.next = null;
}

let head = new node(12)
let mid = new node(18);

head.next=mid;
mid.next=null;

let newNode = new node("JavaScript");

console.log(insertion(head, newNode));