// leetcode 141

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {  //TC=O(n)
        slow = slow.next;
        fast = fast.next.next;
        if ( slow == fast) return true;
  
    }
    return false;

}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(2);
let m1 = new Node(5);
let m2 = new Node(6);
let m3 = new Node(5);
let m4 = new Node(6);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m1;

console.log(hasCycle(head));

// TC=O(n)
// SC=O(1)

