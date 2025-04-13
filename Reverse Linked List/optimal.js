//Leetcode 206

function reverseList(head) {
    var prev=null;
    var temp=head;
    while(temp!=null){
        var ref=temp.next;
        temp.next=prev;
        prev=temp;
        temp=ref;
    }
    return prev
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

console.log(reverseList(head));

// TC= O(2n)
// SC=O(n)