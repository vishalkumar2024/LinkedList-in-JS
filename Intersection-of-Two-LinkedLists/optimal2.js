// leetcode 160

function getIntersectionNode(headA, headB) {

    let d1 = headA;
    let d2 = headB;

    let len1 = 0;
    let len2 = 0;

    let large = headB;

    while (d1 !== null || d2 !== null) {  //TC=O(n)
        if (d1 !== null) {
            len1++;
            d1 = d1.next;
            large = headA
        }
        if (d2 !== null) {
            len2++;
            d2 = d2.next;
            large = headB
        }
    }
    let small = large == headB ? headA : headB;

    let diff = len1 - len2;
    diff = len1 - len2 < 0 ? (len1 - len2) * (-1) : len1 - len2;

    function jump(head, k) {
        let ptr = head;
        let steps = 0;

        while (ptr !== null && steps < k) { //TC=O(m)
            ptr = ptr.next;
            steps++;
        }

        return ptr; // either the node after k jumps or null if k > length
    }

    let modifiedList = jump(large, diff);

    d1 = modifiedList;
    d2 = small;

    while (d1 !== d2) { //TC=O(min(m,n))
        if (d1 == null && d2 == null) return null;
        d1 = d1.next;
        d2 = d2.next;
    }
    return d1;
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
