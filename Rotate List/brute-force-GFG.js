// Given the head of a singly linked list, your task is to left rotate the linked
//  list k times.

function rotateRight(head, k) {
    let ptr = head;
    let n = 0;
    while (ptr) { //TC=O(n)
        n++;
        ptr = ptr.next
    }
    if (n == 0) return null
    if (k == n || k % n == 0) return head;
    else if (k > n) k = n - (k % n)
    else if (n > k) k = n - k


    function kThNode(head, k) {
        let idx = 1
        let ptr = head;
        while (ptr !== null && idx < k) { //TC=O(k)
            ptr = ptr.next;
            idx++;
        }
        return ptr;
    }

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

    let curr = head;
    let lastNode = reverseList(head); //TC=O(n)
    curr = lastNode;

    let thekThNode = kThNode(curr, k); //TC=O(k)
    let nextNode = thekThNode.next
    thekThNode.next = null;

    let newhead = reverseList(curr); //TC=O(k)
    head = newhead;

    let finalNode = reverseList(nextNode); //TC=O(n-k)
    curr.next = finalNode;

    // return head;

    let c = head;
    while (c) {
        console.log(c.data)
        c = c.next
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

console.log(rotateRight(head, 10));

// TC=O(3n + 2k)
// SC=O(1)