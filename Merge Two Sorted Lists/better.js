// leetcode 21

function mergeTwoLists(headA, headB) {
    let dummyNode = new Node(-1);
    let dDummy = dummyNode;

    let ptr1 = headA;
    let ptr2 = headB;

    while (ptr1 !== null && ptr2 !== null) {  //TC=O(n+m)
        if (ptr1.data <= ptr2.data) {
            dDummy.next = ptr1;
            ptr1 = ptr1.next;
        } else {
            dDummy.next = ptr2;
            ptr2 = ptr2.next;
        }
        dDummy = dDummy.next; // Move the tail forward
    }

    // Append the remaining nodes
    if (ptr1 !== null) {
        dDummy.next = ptr1;
    }
    if (ptr2 !== null) {
        dDummy.next = ptr2;
    }

    // return dummyNode.next;

    let curr = dummyNode.next;
    let res = "";
    while (curr !== null) {
        res += curr.data + " "
        curr = curr.next;
    }
    return res;
}

function Node(data) {
    this.data = data;
    this.next = null;
}
let head1 = new Node(1);
let m1 = new Node(2);
let m2 = new Node(4);
let m3 = new Node(6);

head1.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = null;

let head2 = new Node(1);
let n1 = new Node(3);
let n2 = new Node(4);

head2.next = n1;
n1.next = n2;
n2.next = null;

console.log(mergeTwoLists(head1, head2))

// TC=O(n+m)
// SC=O(n+m)


