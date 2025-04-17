
function removeDuplicates(head) {

    let curr = head;
    while (curr != null && curr.next !== null) {
        if (curr.data === curr.next.data) {
            curr.next = curr.next.next
        }
        else {
            curr = curr.next;
        }
    }
    return head;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(2);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(4);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = null;


console.log(removeDuplicates(head));

// TC=O(n)
// SC=O(n)
