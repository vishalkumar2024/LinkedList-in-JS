//Leetcode 160
function getIntersectionNode(head1, head2) {
    let curr = head1;
    let arr1 = [];  //  SC=O(m)
    while (curr != null) {  //TC=O(m)
        arr1.push(curr.data);
        curr = curr.next;
    }

    curr = head2;
    let arr2 = [];  //SC=O(n)
    while (curr != null) {  //TC=O(n)
        arr2.push(curr.data)
        curr = curr.next;
    }

    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let res = null;
    while (i >= 0 || j >= 0) {  //TC=O(m)
        if (arr1[i] == arr2[j]) {
            res = arr1[i];
        }
        else {
            return res;
        }
        i--;
        j--;
    }
    return null;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head1 = new Node(4);
let m1 = new Node(1);
let m2 = new Node(8);
let m3 = new Node(4);
let m4 = new Node(5);

head1.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = null;



let head2 = new Node(5);
let n1 = new Node(6);
let n2 = new Node(1);
let n3 = new Node(5);
let n4 = new Node(4);
let n5 = new Node(5);

head2.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = null;

console.log(getIntersectionNode(head1, head2));

// TC = O(m+n) + O(m)
// SC = O(m+n)
