//Leetcode 160
// function getIntersectionNode(head1, head2) {
//     if (!head1 || !head2) return null
//     let d1 = head1;
//     let d2 = head2;

//     // if (d1 == null || d2 == null) {
//     //     return null;
//     // }

//     while (d1 !== d2 ) {
//         d1 = d1 ? d1.next : head2;
//         d2 = d2 ? d2.next : head1;
//     }
//     return d1;


// }

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;
    
    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a; // or b
};

function Node(data) {
    this.data = data;
    this.next = null;
}

let head1 = new Node(4);
let m1 = new Node(1);
let m2 = new Node(8);
let m3 = new Node(4);
let m4 = new Node(5);

head1.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = null;



let head2 = new Node(5);
let n1 = new Node(6);
let n2 = new Node(1);
let n3 = new Node(5);
let n4 = new Node(4);
let n5 = new Node(5);

head2.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = null;

console.log(getIntersectionNode(headA, headB));

// TC = O(m+n) + O(m)
// SC = O(m+n)
