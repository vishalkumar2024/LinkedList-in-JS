
function Reverse(head) {

    if (head == null || head.next == null) {
        return head;
    }

    let curr = head;
    let back = null;

    while (curr !== null) {
        back = curr.prev;
        curr.prev = curr.next;
        curr.next = back;

        curr = curr.prev;

    }
    return back.prev;
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
let m4 = new Node(5);

head.prev = null;
head.next = m1;
m1.prev = head;
m1.next = m2;
m2.prev = m1;
m2.next = m3;
m3.prev = m2;
m3.next = m4;
m4.prev = m3;
m4.next = null;

console.log(Reverse(head));

