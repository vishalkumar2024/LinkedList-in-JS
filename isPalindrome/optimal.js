//Leetcode 234

function reverseList(head) {

    // Find the middle of the linked list

    // Find the middle of the linked list
    var slow = head;
    var fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    function reverseList(head) {
        var prevNode = null;
        var currNode = head;

        while (currNode != null) {
            var nextNode = currNode.next;
            currNode.next = prevNode;

            //update
            prevNode = currNode;
            currNode = nextNode;
        }
        return prevNode;
    }

    let newHead = reverseList(slow.next);


    // Compare the first half with the reversed second half
    let ptr1 = newHead;
    let ptr2 = head;
    while (ptr1 !== null && ptr2 !== null) {
        if (ptr1.data !== ptr2.data) {
            return false;
        }
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    return true;

};

function Node(val) {
    this.val = val;
    this.next = null
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(3);
let m4 = new Node(2);
let m5 = new Node(1);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = null;

console.log(reverseList(head));

// TC=O(2n)
// SC=O(1)