//Leetcode 876

function middleNode(head) {
    function totalCount(head, count) { 
        let ptr = head;
        while (ptr != null) { //TC=O(n)
            ptr = ptr.next;
            count++
        }
        return count;
    }
    let totalNode = totalCount(head, 0);

    let mid=Math.floor(totalNode/2);
    

    let current = head;
    let idx = 0
    while (idx < mid) {  //TC=O(n/2)
        current = current.next;
        idx++
    }
    return current;
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

console.log(middleNode(head));

// TC= O(n) + O(n/2) ~ O(n)
// SC=O(1)