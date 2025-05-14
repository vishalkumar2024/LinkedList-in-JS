// Given two linked lists head1 and head2, find the intersection of
// two linked lists. Each of the two linked lists contains distinct 
// node values.

function findIntersection(headA, headB) {
    let firstNode = new Node(-1); //SC=O(min(m,n))
    let ptr = firstNode;

    let map = new Map(); //SC=O(n)

    let curr = headB;
    while (curr) {    //TC=O(n)
        map.set(curr.data)
        curr = curr.next;
    }


    curr = headA;
    while (curr) {  //TC=O(n)
        let newNode = new Node(curr.data);
        if (map.has(curr.data)) {  
            ptr.next = newNode;
            ptr = ptr.next;
        }
        curr = curr.next;
    }
    // return firstNode.next

    curr = firstNode.next;
    while (curr) {
        console.log(curr.data)
        curr = curr.next;
    }
}

function Node(data) {
    this.data = data;
    this.next = null;
}
let head1 = new Node(9);
let m1 = new Node(6);
let m2 = new Node(4);
let m3 = new Node(2);
let m4 = new Node(8);

head1.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = null;

let head2 = new Node(1);
let n1 = new Node(2);
let n2 = new Node(8);
let n3 = new Node(6);

head2.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = null;

console.log(findIntersection(head1, head2));


// TC=(m+n)
// SC=(m+n) 