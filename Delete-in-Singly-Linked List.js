
function deleteList(head, x) {
    if (x == 1) {
        return head = head.next;
    }

    let current = head;
    let idx = 1;
    while (current.next != null && idx < x - 1) {
        current = current.next;
        idx++;
    }
    
    if (current !== null && current.next !== null) {
        current.next = current.next.next;
    }
    // return head;

    for (let curr = head; curr != null; curr = curr.next) {
        console.log(curr.data);
    }
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(2);
let m1 = new Node(5);
let m2 = new Node(6);
let m3 = new Node(5);
let m4 = new Node(6);
let m5 = new Node(1);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = null;


console.log(deleteList(head, 4));


