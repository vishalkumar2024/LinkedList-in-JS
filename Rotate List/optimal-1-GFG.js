// Given the head of a singly linked list, your task is to left rotate the linked
//  list k times.

function rotateRight(head, k) {

    let ptr = head;
    let lastNode;
    let n = 0;
    while (ptr) { //TC=O(n)
        if(!ptr.next){lastNode=ptr}
        n++;
        ptr = ptr.next
    }

    if (n == 0) return null
    if (k == n || k % n == 0) return head;

    else if (k > n) k = (k % n)

    if (!head.next) {
        return head
    }

    let curr = head;
    for (let i = 1; i < k; i++) {  //TC=O(k)
        curr = curr.next;
    }

    let secondNode = curr.next;
    let presentNode = curr.next
    curr.next = null;
    secondNode=lastNode


    secondNode.next = head;
    head = presentNode
   
    curr = head;
    while (curr) {
        console.log(curr.data)
        curr = curr.next
    }
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

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = null;

console.log(rotateRight(head, 2));

// TC=O(2n)
// SC=O(1)
