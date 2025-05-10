// Given the head of a Singly Linked List and a value x. The task is to insert the 
// key in the middle of the linked list

function insertInMiddle(head, x) {
    let insert = new Node(x);

    let ptr = head;
    let count = 0;
    while (ptr != null) { //TC=O(n)
        ptr = ptr.next;
        count++
    }
    if (count == 0) return insert;
    let mid = count % 2 == 0 ? (count / 2) : Math.ceil(count / 2);

    let curr = head;
    let idx = 1;

    while (curr !== null && idx < mid) { //TC=O(n/2)
        curr = curr.next;
        idx++;
    }
    let temp = curr.next;
    curr.next = insert;
    insert.next = temp;

    // return head;

    curr = head;
    while (curr !== null) {
        console.log(curr.data)
        curr = curr.next;
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

console.log(insertInMiddle(head, 12));

// TC=O(n)
// SC=O(1)

