// Given a sorted doubly linked list of positive distinct elements, the task is
// to find pairs in a doubly-linked list whose sum is equal to given value target.

function findPairsWithGivenSum(head, target) {
    let curr1 = head;

    let curr2 = head;
    while (curr2.next) { //TC=O(n)
        curr2 = curr2.next;
    }

    let res = [];
    while (curr1.data <= curr2.data) {  //TC=O(n/2)
        if (curr1.data + curr2.data==target) {
            res.push([curr1.data, curr2.data]);
            curr1 = curr1.next;
            curr2 = curr2.prev;
        }
         else if ((curr1.data + curr2.data) > target) {
            curr2 = curr2.prev
        }
        else ((curr1.data + curr2.data) < target) {
            curr1 = curr1.next;
        }
    }
    return res;
}

function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(4);
let m3 = new Node(5);
let m4 = new Node(6);
let m5 = new Node(8);
let m6 = new Node(9);

head.prev = null;
head.next = m1;
m1.prev = head;
m1.next = m2;
m2.prev = m1;
m2.next = m3;
m3.prev = m2;
m3.next = m4;
m4.prev = m3;
m4.next = m5;
m5.prev = m4;
m5.next = m6;
m6.prev = m5;
m6.next = null;

console.log(findPairsWithGivenSum(head, 9));

// TC=O(2n)
// SC=O(1)