
function deleteAllOccurOfX(head, key) {

    let curr = head;
    while (curr) {
        if (curr.data == key) {
            if (curr == head) {
                head = head.next;
            }
            let prevNode = curr.prev;
            let nextNode = curr.next;

            if (nextNode) nextNode.prev = prevNode
            if (prevNode) prevNode.next = nextNode

            curr = nextNode;
        }
        else {
            curr = curr.next;
        }
    }
    // return head;

    curr = head;
    while (curr) {
        console.log(curr.data)
        curr = curr.next;
    }
}

function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

let head = new Node(10);
let m1 = new Node(4);
let m2 = new Node(10);
let m3 = new Node(10);
let m4 = new Node(6);
let m5 = new Node(10);

head.prev = null;
head.next = m1;
m1.prev = head;
m1.next = m2;
m2.prev = m1;
m2.next = m3;
m3.prev = m2;
m3.next = m4;
m4.prev = m3;
m4.next = m5;
m5.prev = m4;
m5.next = null;


console.log(deleteAllOccurOfX(head, 10));

