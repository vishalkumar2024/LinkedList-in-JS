// Leetcode 83
function removeDuplicates(head) {
    let map = new Map();

    let curr = head;
    while (curr) {  //TC=O(n)
        map.set(curr.data, (map.get(curr.data) || 0) + 1);
        curr = curr.next
    }

    let newList = new Node(0); //SC=O(n)
    curr = newList;
    for (let [key, value] of map) {  //TC=O(n)
        let newNode = new Node(key);
        curr.next = newNode;
        curr = curr.next;
    }
    curr.next = null
    return newList.next;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(3);
let m4 = new Node(4);
let m5 = new Node(4);
let m6 = new Node(5);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;
m6.next = null;

console.log(removeDuplicates(head));

// TC=O(2n)
// SC=O(n)
