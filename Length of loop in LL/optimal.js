// Given the head of a linked list, determine whether the list contains a loop. If
// loop is present, return the number of nodes in the loop, otherwise return null.

// Solved with Tortoise and hare Technique

function countNodesinLoop(head) {
    let slow = head;
    let fast = head;


    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        let count = 0
        if (slow == fast) {
            fast = fast.next;
            count++;
            while (slow != fast) {
                fast = fast.next;
                count++;
            }
            return count;
        }
    }
    return 0;
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
m4.next = m1;

console.log(countNodesinLoop(head));

// TC=O(n)
// SC=O(1)