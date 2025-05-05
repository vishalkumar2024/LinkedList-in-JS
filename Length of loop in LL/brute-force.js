// Given the head of a linked list, determine whether the list contains a loop. If
// loop is present, return the number of nodes in the loop, otherwise return null.

function countNodesinLoop(head) {
    let map = new Map(); //SC=O(n)

    let curr = head;
    let idx = 1;

    while (curr) {    //TC=O(n)
        if (map.has(curr)) {
            let ans = idx - map.get(curr)
            return ans
        }
        map.set(curr, idx)
        curr = curr.next;
        idx++;
    }
    return null;
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
// SC=O(n)