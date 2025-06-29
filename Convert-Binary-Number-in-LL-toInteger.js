// Leetcode 1290

function getDecimalValue(head) {
    let curr = head;
    let n = 0
    while (curr) { //determining total number of nodes
        n++;
        curr = curr.next;
    }

    curr = head;
    let sum = 0
    let k = 1;
    while (curr) {
        sum += (curr.data) * Math.pow(2, (n - k));
        k++;
        curr = curr.next
    }
    return sum;
}

function Node(data) {
    this.data = data;
    this.next = null
}

let head = new Node(1);
let m1 = new Node(1);
let m2 = new Node(1);

head.next = m1;
m1.next = m2;
m2.next = null;

console.log(getDecimalValue(head));

// TC=O(2n)
// SC=O(1)