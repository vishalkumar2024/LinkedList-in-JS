//Leetcode 19

function removeNthFromEnd(head, n) {

    let curr = head;
    count = 0
    while (curr) {  //TC=O(n)
        curr = curr.next
        count++;
    }
    let diff = count - n;

    if (diff == 0) return head.next;

    curr = head;
    idx = 1
    while (curr && idx < diff) { //TC=O(n)
        curr = curr.next;
        idx++;
    }

    curr.next = curr.next.next;

    // return head;

    curr = head
    while (curr) {
        console.log(curr.data)
        curr = curr.next
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
m4.next = null;

console.log(removeNthFromEnd(head, 2));

// TC=O(2n)
// SC=O(1)