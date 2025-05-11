// Leetcode 83
function removeDuplicates(head) {
    let curr1 = head;

    while (curr1 && curr1.next) {
        let curr2 = curr1.next;
            while (curr2 && curr2.data == curr1.data) {
                curr2 = curr2.next;
            }
            curr1.next = curr2;
            curr1 = curr1.next;
    }
    // return head 

    let curr=head;
    while(curr){
        console.log(curr.data)
        curr=curr.next
    }
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(3);
let m4 = new Node(4);
let m5 = new Node(4);
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
