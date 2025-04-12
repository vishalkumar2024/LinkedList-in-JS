function Node(data) {
    this.data = data;
    this.next = null
}

let head = new Node(10);
let m1 = new Node(20);
let m2 = new Node(30);
let m3 = new Node(40);
let tail = new Node(50);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = tail;


function deleteNode(head, target) {  // node which has data 30 and index 2 will be deleted 
    let current = head;
    let idx = 0;
    while (current.next != null && idx != target - 1) {
        current = current.next;
        idx++
    }
    current.next = current.next.next;
}


function traversal(head) {
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}

deleteNode(head, 2);
traversal(head);

