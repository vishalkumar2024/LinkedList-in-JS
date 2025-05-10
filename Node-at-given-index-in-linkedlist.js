// Given the head of Singly Linked List and an index, The task is to find the node
// at the given index(1-based index) of the linked list. If no such index exists 
// then return -1.

function GetNth(head, index) {

    let curr=head;
    let idx=1
    while(curr!==null && idx<=index-1){  //TC=O(n)
        curr=curr.next;
        idx++;
    }
    if(curr==null) return -1;
    return curr.data;
    
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

console.log(GetNth(head, 3));

// TC=O(n)
// SC=O(1)