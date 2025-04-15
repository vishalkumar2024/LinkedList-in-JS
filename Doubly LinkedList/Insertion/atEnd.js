
function Insertion(head) {
    let insertNode = new Node("JavaScript");



    let curr = head;
    while (curr.next != null) {
        curr = curr.next;
    }
    curr.next = insertNode;
    insertNode.prev=curr
    insertNode.next = null

    curr = head;
    while (curr != null) {
        console.log(curr.data)
        curr = curr.next;
    }
}

function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(4);

head.prev = null;
head.next = m1;
m1.prev = head;
m1.next = m2;
m2.prev = m1;
m2.next = m3;
m3.prev = m2;
m3.next = null;


console.log(Insertion(head));

