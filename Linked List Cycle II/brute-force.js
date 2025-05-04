// leetcode 142

function detectCycle(head) {
    let map = new Map();    //SC=O(n)

    let curr = head;
    let idx = 0;
    while (curr) {    //TC=O(n)
        if (map.has(curr)) {
            return curr
        }
        map.set(curr, idx);
        idx++;
        curr = curr.next;
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
m2.next=m3;
m3.next = m1;

console.log(detectCycle(head));

// TC=O(n)
// SC=O(n)