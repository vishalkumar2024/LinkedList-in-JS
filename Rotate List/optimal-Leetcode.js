// Leetcode 61
function rotateRight(head, k) {
    if (!head) return null
    if (!head.next) return head;

    let curr = head;
    let length = 1;
    while (curr.next) { //TC=O(n)
        length++;
        curr = curr.next
    }

    if (k == length || k % length == 0) return head
    else if (k > length) k = k % length

    curr.next = head;
    curr = head;
    let idx = 1
    while (curr && idx < (length - k)) { //TC=O(len - k)
        idx++
        curr = curr.next
    }
    head = curr.next;
    curr.next = null;

//    return head;

    let ptr = head;
    while (ptr) {
        console.log(ptr.data)
        ptr = ptr.next
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