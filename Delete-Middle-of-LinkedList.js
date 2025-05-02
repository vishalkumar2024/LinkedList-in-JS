// Given a singly linked list, delete the middle of the linked list.

function deleteMid(head) {

    let ptr = head;
    count=0;
    while (ptr != null) { //TC=O(n)
        ptr = ptr.next;
        count++
    }
    mid=count%2==0?(count/2)+1:Math.ceil(count/2);

    let curr = head;
    let idx = 1;

    while (curr!==null && idx < mid-1) { //TC=O(n/2)
        curr = curr.next;
        idx++;
    }
    curr.next = curr.next.next
    // return head;

    curr = head;
    while (curr!==null) {
        console.log(curr.data)
        curr = curr.next;
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
let m5 = new Node(6);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;

console.log(deleteMid(head));

// TC=O(n)
// SC=O(1)