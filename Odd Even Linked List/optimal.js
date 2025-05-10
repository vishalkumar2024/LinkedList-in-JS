//Leetcode 328

function oddEvenList(head) {
    if (!head || !head.next) return head;  //if only two nodes are there return the head

    let odd = head;
    let even = head.next;
    let evenHead = head.next

    while (even && even.next) {
        odd.next = odd.next.next;
        odd = odd.next
        even.next = even.next.next;
        even = even.next

    }
    odd.next = evenHead;
    even.next = null

    // return head;

    curr = head;
    while (curr) {
        console.log(curr.data)
        curr = curr.next
    }
}

function Node(data) {
    this.data = data;
    this.next = null
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(4);
let m4 = new Node(5);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = null;

console.log(oddEvenList(head));

// TC=O(n)
// SC=O(1)