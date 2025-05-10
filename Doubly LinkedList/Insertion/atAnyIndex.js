
function Insertion(head, target) {

    let newNode = new Node("JavaScript");

    let current = head;
    let idx = 0;
    while (current != null && idx != target - 1) {
        current = current.next;
        idx++;
    }
    let temp = current.next;
    current.next = newNode;
    newNode.prev = current
    newNode.next = temp;

    current = head;
    while (current != null) {
        console.log(current.data)
        current = current.next;
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

console.log(Insertion(head, 2));

