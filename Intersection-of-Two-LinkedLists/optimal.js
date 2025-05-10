// leetcode 160

function getIntersectionNode(headA, headB) {
    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }

    return a; // returns the intersecting node or null
}

function Node(data) {
    this.data = data;
    this.next = null;
}
let head1 = new Node(4);
let m1 = new Node(1);
let inter = new Node(8); // Intersection node
let m3 = new Node(4);
let m4 = new Node(5);

head1.next = m1;
m1.next = inter;
inter.next = m3;
m3.next = m4;

let head2 = new Node(5);
let n1 = new Node(6);
let n2 = new Node(1);

head2.next = n1;
n1.next = n2;
n2.next = inter; 

console.log(getIntersectionNode(head1, head2));

// TC = O(m+n)
// SC = O(1)
