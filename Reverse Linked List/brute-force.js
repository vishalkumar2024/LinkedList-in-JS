//Leetcode 206

function reverseList(head) {
    let ptr = head;
    let arr = [];  //SC=O(n)
    while (ptr != null) {  //TC=O(n)
        arr.push(ptr.data); // Storing list data into an Array arr
        ptr = ptr.next;
    }

    ptr = head;
    let idx = arr.length - 1;
    while (ptr != null) {  //TC=O(n)
        ptr.data = arr[idx]; // replace with reversed values
        idx--;
        ptr = ptr.next;
    }
    return head;
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

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;

console.log(reverseList(head));

// TC= O(2n)
// SC=O(n)
