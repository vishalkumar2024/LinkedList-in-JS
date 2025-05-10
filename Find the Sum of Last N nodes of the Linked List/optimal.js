// Given a single linked list, calculate the sum of the last n nodes.

function sumOfLastN_Nodes(head, n) {
    function reverseList(head) {
        var prevNode = null;
        var currNode = head;

        while (currNode != null) {  //TC=O(len(head))
            var nextNode = currNode.next;
            currNode.next = prevNode;

            //update
            prevNode = currNode;
            currNode = nextNode;
        }
        return prevNode;
    }
    let reversed = reverseList(head)

    let curr = reversed;
    let sum = 0;
    for (let i = 1; i <= n; i++) {  //TC=O(n)
        sum += curr.data;
        curr = curr.next
    }
    return sum;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(5);
let m1 = new Node(9);
let m2 = new Node(6);
let m3 = new Node(3);
let m4 = new Node(4);
let m5 = new Node(10);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = null;

console.log(sumOfLastN_Nodes(head, 3));


// TC=O(len(head)+n)
// SC=O(1)