//Leetcode 206

function reverseList(head) {
    function check(arr) {
        let start =0;
        let end = arr.length - 1;
        while (start <= end) {       //TC=O(n/2)
            if (arr[start] !== arr[end]) {
                return false;
            }
            start++;
            end--;
        }
      return true;
    }
    let arr = [];  //SC=O(n)

    let curr = head;
    while (curr != null) { //TC=O(n)
        arr.push(curr.data);
        curr = curr.next;
    }
    return check(arr);
}

function Node(data) {
    this.data = data;
    this.next = null
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(2);
let m4 = new Node(1);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;

console.log(reverseList(head));

// TC= O(2n)
// SC=O(n)
