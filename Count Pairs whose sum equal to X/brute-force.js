// Given two linked lists head1 and head2 with distinct elements, determine the count
// of all distinct pairs from both lists whose sum equals the given value x.

function countPairs(head1, head2, x) {
    let count = 0;
    let curr1 = head1;
    while (curr1) {
        let curr2 = head2;
        while (curr2) {
            if ((curr1.data + curr2.data) == x) {
                count++;
                break;
            }
            curr2 = curr2.next;
        }
        curr1 = curr1.next;
    }
    return count
}

function Node(data) {
    this.data = data;
    this.next = null;
}
let head1 = new Node(7);
let m1 = new Node(5);
let m2 = new Node(1);
let m3 = new Node(3);
let m4 = new Node(11);

head1.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = null;

let head2 = new Node(3);
let n1 = new Node(5);
let n2 = new Node(2);
let n3 = new Node(8);

head2.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = null;

console.log(countPairs(head1, head2, 10));


// TC=O(m*n)
// SC=O(1)