// Define a Node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
 
// Create a simple Linked List
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);

// Function to print the Linked List
function printList(node) {
    let current = node;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

// Print the Linked List
printList(head);




//  creating a node //
// function node(data) {
//     this.data = data;
//     this.next = null;
// }

// let head = new node(5)
// console.log(head);





// // creating multiple nodes //
// function node(data) {
//     this.data = data;
//     this.next = null;
// }

// let head = new node(5)
// let mid = new node(10);
// head.next = mid;
// let tail = new node(20);
// mid.next = tail;
// console.log(head)

// // [5,next --> [10,next --> [20,next --> Null]]]






