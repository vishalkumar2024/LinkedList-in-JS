// Leetcode 82
function removeDuplicates(head) {

    const dummy = new Node(-1); // Dummy node to handle edge cases
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    while (curr) {
        if (curr.next && curr.data === curr.next.data) {
            while (curr.next && curr.data === curr.next.data) {
                curr = curr.next;
            }
            prev.next = curr.next;
        } else {
            prev = prev.next;
        }
        curr = curr.next;
    }

    // return dummy.next;

    curr = dummy.next;
    while (curr) {
        console.log(curr.data)
        curr = curr.next;
    }
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(1);
let m1 = new Node(1);
let m2 = new Node(2);
let m3 = new Node(3);
let m4 = new Node(3);
let m5 = new Node(5);
let m6 = new Node(5);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;
m6.next = null;

console.log(removeDuplicates(head));

// TC=O(n)  outer while loop runs over unduplicate nodes and inner while loops run over duplicate nodes combined both loops total traversal done over n length
// SC=O(1)