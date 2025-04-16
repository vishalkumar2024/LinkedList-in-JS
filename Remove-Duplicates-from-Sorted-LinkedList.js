
function removeDuplicates(head) {
    let curr = head;
    while (curr != null) {
        if (curr.data === curr.next.data) return curr.data;
        else {
            curr = curr.next;
        }
    }
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(2);
let m3 = new Node(4);
let m4 = new Node(5);
let m5 = new Node(6);
let m6 = new Node(7);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;

console.log(removeDuplicates(head));

// TC=O(n)
// SC=O(n)
