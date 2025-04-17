function Node(data) {
    this.data = data;
    this.next = null
}

let head = new Node(6);
let m1 = new Node(4);
let m2 = new Node(5);
let m3 = new Node(3);
let m4 = new Node(1);


head.next = m1
m1.next = m2; 
m2.next = m3; 
m3.next = m4; 
m4.next = null;


function deleteNode(head, target) {
    let current = head;
    let idx = 0;
    while (current.next != null && idx != target - 1) {
        current = current.next;
        idx++
    }
    current.next = current.next.next;
    return head;
}


function traversal(head) {
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}

console.log(deleteNode(head, 1));
traversal(head);

