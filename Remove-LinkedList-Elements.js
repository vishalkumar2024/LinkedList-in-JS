// leetcode 203
function removeElement(head, val) {
    let newNode = new Node(-1);
    newNode.next = head;
    head = newNode;

    let curr = newNode;
    while (curr) {
        let nextNode = curr.next;
        while (nextNode && nextNode.data == val) {
            nextNode = nextNode.next;
        }
        curr.next = nextNode
        curr = nextNode;
    }
    return head.next;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(2);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(4);
let m4 = new Node(2);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = null;

console.log(removeElement(head,2));

// TC=O(n)
// SC=O(1)