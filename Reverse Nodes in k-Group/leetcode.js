// leetcode 25
function reverseKGroup(head, k) {

    function kThNode(head, k) {
        let idx = 1
        let ptr = head;
        while (ptr !== null && idx < k) { //TC=O(k)
            ptr = ptr.next;
            idx++;
        }
        return ptr;
    }

    function reverseList(head) { //TC=O(k)
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

    let prevNode;
    let nextNode;
    let curr = head;
    while (curr) {
        let thekThNode = kThNode(curr, k);

        if (thekThNode == null) {
            if (prevNode) prevNode.next = curr;
            break;

        }
        nextNode = thekThNode.next;
        thekThNode.next = null;

        reverseList(curr);

        if (curr == head) {
            head = thekThNode;
        } else {
            prevNode.next = thekThNode;
        }
        prevNode = curr;
        curr = nextNode;
    }

    // return head;

    curr = head
    while (curr) {
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
let m6 = new Node(7);
let m7 = new Node(8);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;
m6.next = m7;
m7.next = null;

console.log(reverseKGroup(head, 3));

// TC= O(2n)
// SC=O(1)