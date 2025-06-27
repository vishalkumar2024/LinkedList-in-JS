// Given a doubly linked list of n elements. The task is to return the doubly 
// linked list as an array.

// Note: The driver code will print the list forward and backward

function displayList(head) {

    let curr = head;
    let count = 0;
    while (curr != null) {  //TC=O(n)
        count++;
        curr = curr.next;
    }

    curr = head;
    let arr1 = [];  //SC=O(n)
    let arr2 = [];  //SC=O(n)
    let idx = 0
    while (curr != null && idx < count) {  //TC=O(n)
        arr1[idx] = curr.data;
        arr2[(count - 1) - idx] = curr.data;
        curr = curr.next;
        idx++;
    }
 
    return [arr1,arr2];
}


function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);

head.prev = null;
head.next = m1;
m1.prev = head;
m1.next = m2;
m2.prev = m1;
m2.next = null;

console.log(displayList(head));


// TC=O(n)
// SC=O(n)