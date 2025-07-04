//Leetcode 876

// Solved with Tortoise and hare Technique

function middleNode(head) {
    let first = head;
    let second = head;
    while (second.next != null && second.next.next !== null) {
        first = first.next;
        second = second.next.next;
    }
    if (second.next !== null) { //for odd number of nodes in linkedList
        return first.next;
    }
    else {  //for even number of nodes in linkedList
        return first;
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

console.log(middleNode(head));

// TC= O(n)
// SC=O(1)