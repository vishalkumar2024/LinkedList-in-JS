// Given a singly linked list, remove all nodes that have a node with a greater
// value anywhere to their right in the list. Return the head of the modified 
// linked list.

function compute(head) {
    function reverseList(head) {
        var prevNode = null;
        var currNode = head;

        while (currNode != null) {  //TC=O(n)
            var nextNode = currNode.next;
            currNode.next = prevNode;

            //update
            prevNode = currNode;
            currNode = nextNode;
        }
        return prevNode;
    }

    head = reverseList(head);

    let maxNode = head;
    let curr = head;
    while (curr != null && curr.next != null) { //TC=O(n)
        if (curr.next.data < maxNode.data) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
            maxNode = curr;
        }
    }


    // return head = reverseList(head);

    let temp =  reverseList(head);
    while (temp) {
        console.log(temp.data);
        temp = temp.next;
    }
}

function Node(data) {
    this.data = data;
    this.next = null
}

let head = new Node(12);
let m1 = new Node(15);
let m2 = new Node(10);
let m3 = new Node(11);
let m4 = new Node(5);
let m5 = new Node(6);
let m6 = new Node(2);
let m7 = new Node(3);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;
m6.next = m7;
m7.next = null;

console.log(compute(head));

// TC=O(3n)
// SC=O(1)