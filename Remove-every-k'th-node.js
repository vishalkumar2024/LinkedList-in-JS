// Given a singly linked list, your task is to remove every kth node
//  from the linked list. 

function deleteK(head, k) {
    let dummy = new Node(-1);
    dummy.next = head;

    let curr = head;
    let prev = dummy;
    let idx = 1;
    while (curr) {
        let nextNode = curr.next;
        if (idx % k == 0) {
            curr = prev;
            curr.next = nextNode;
            curr = curr.next
        } else {
            curr = curr.next
            prev = prev.next;
        }
        idx++;
    }
    // return head;

    curr=head;
    while(curr){
        console.log(curr.data)
        curr=curr.next
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
let m6 = new Node(7);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;
m6.next = null;

console.log(deleteK(head, 2));

// TC=O(n)
// SC=O(1)