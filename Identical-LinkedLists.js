
function areIdentical(head1, head2) {
    let curr1 = head1;
    let curr2 = head2;
    while (curr1 !== null || curr2 != null) { //TC=O(n)
        if (curr1.data !== curr2.data) {
            return false;
        }
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    return true;
}


function Node(data) {
    this.data = data;
    this.next = null
}

let head1 = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(2);
let m4 = new Node(1);

head1.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;


function node(data) {
    this.data = data;
    this.next = null
}

let head2 = new node(1);
let n1 = new node(2);
let n2 = new node(3);
let n3 = new node(2);
let n4 = new node(1);

head2.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(areIdentical(head1, head2));

// TC=O(n)
// SC=O(1)
