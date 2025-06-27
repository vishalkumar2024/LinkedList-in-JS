// Given the head of a Singly Linked List and a number k, the task is to find
// the data of the modular node of the linked list. If no such index is present
// return -1.

// A modular node is defined as the last node in the linked list whose index
// is divisible by k (i%k==0). 

function modularNode(head, x) {
    let ptr = head;
    let idx = 1;
    let arr = []  //SC=O(n)
    while (ptr != null) {  //TC=O(n)
        if (idx % x === 0) {
            arr.push(ptr.data)
        }
        ptr = ptr.next;
        idx++;
    }

    return arr.length > 0 ? arr[arr.length - 1] : -1;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(4);
let m4 = new Node(5);
let m5 = new Node(6);
let m6 = new Node(7);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;

console.log(modularNode(head, 1));

// TC=O(n)
// SC=O(n)
