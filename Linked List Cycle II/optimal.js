// leetcode 142
//Tortoise and hare Technique

function detectCycle(head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            fast = head;
            while (fast !== slow) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow
        }
    }
    return null;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(3);
let m1 = new Node(2);
let m2 = new Node(0);
let m3 = new Node(4);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m1;

console.log(detectCycle(head));

// TC=O(n)
// SC=O(1)
