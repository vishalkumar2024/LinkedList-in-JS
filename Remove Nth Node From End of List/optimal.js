//Leetcode 19

function removeNthFromEnd(head, n) {
    if(head.next==null) return null

    let fast = head;
    let slow = head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if(fast==null) return head.next

    while (fast.next) {
        fast = fast.next
        slow = slow.next;
    }
    slow.next=slow.next.next
     
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
let m5 = new Node(6);
let m6 = new Node(7);
let m7 = new Node(8);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;
m6.next = m7;
m7.next = null;

console.log(removeNthFromEnd(head, 4));

// TC=O(n)
// SC=O(1)