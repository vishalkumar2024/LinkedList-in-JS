
function deletion(head, target) {
    let current = head;
    let idx = 0;
    while (current.next != null && idx != target - 1) {
        current = current.next;
        idx++
    }
    current.next = current.next.next;


    function traversal(head) {
        let current = head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
    traversal(head)
}


function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(30);
let m3 = new Node(4);

head.prev = null;
head.next = m1;
m1.prev = head;
m1.next = m2;
m2.prev = m1;
m2.next = m3;
m3.prev = m2;
m3.next = null;


console.log(deletion(head, 2));

