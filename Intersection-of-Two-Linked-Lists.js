// Given two linked lists head1 and head2, find the intersection of two linked lists.
//  Each of the two linked lists contains distinct node values.

function getIntersectionNode(headA, headB) {
    let d1=headA;
    let d2=headB;

    let large = headB;

    while (d1 !== null || d2 !== null) {  //TC=O(n)
        if (d1 !== null) {
            d1 = d1.next;
            large = headA
        }
        if (d2 !== null) {
            d2 = d2.next;
            large = headB
        }
    }
    let small = large == headB ? headA : headB;

    let map=new Map();

    let curr=large;
    while(curr !== null){
        map.set(curr.data);
        curr=curr.next;
    }

    
}

function Node(data) {
    this.data = data;
    this.next = null;
}
let head1 = new Node(9);
let m1 = new Node(6);
let m2 = new Node(5);
let m3 = new Node(2);
let m4 = new Node(3);
let m5 = new Node(8);

head1.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = null;

let head2 = new Node(1);
let n1 = new Node(2);
let n2 = new Node(8);
let n3 = new Node(6);

head2.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = null;

console.log(getIntersectionNode(head1, head2));
