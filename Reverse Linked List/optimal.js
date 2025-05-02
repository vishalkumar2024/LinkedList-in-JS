//Leetcode 206

function reverseList(head) {
    var prevNode=null;
    var currNode=head;

    while(currNode!=null){
        var nextNode=currNode.next;
        currNode.next=prevNode;

        //update
        prevNode=currNode;
        currNode=nextNode;
    }
    return prevNode;
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

// TC= O(n)
// SC=O(1)