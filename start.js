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






// // Inserting new node to the starting //
// function node(data) {
//     this.data = data;
//     this.next = null;
// }

// let head = new node(12)
// let mid = new node(18);
// head.next=mid;
// let newNode=new node(6);
// newNode.next=head;
// head=newNode
// console.log(head)







// // Inserting new node to the end //
// function node(data) {
//     this.data = data;
//     this.next = null;
// }
// function insertNode(newNode, head) { // go to the last node through current variable
//     let current = head;
//     while (current.next != null) {
//         current = current.next;
//     }
//     current.next = newNode;
// }

// function traversal(head) { // traverse to the entire linkedList and print the data of all nodes, the newNode has inserted to the last as tail successfully 
//     let current = head;
//     while (current != null) {
//         console.log(current.data);
//         current = current.next;
//     }
// }


// let head = new node(12)
// let mid = new node(18);
// let tail = new node(24);
// head.next = mid;
// mid.next = tail;
// let newNode = new node(30) //node which has to be inserted to the last of linkedList

// insertNode(newNode, head);
// traversal( head);




// Inserting new node to a particular index //
function node(data) {
    this.data = data;
    this.next = null;
}

let head = new node(13) //creating the nodeds
let m1 = new node(26)
let m2 = new node(39)
let tail = new node(52)

head.next = m1; // placing the nodes
m1.next = m2;
m2.next = tail;

let newNode = new node("JavaScript");

function insertIdx(head, newNode, target) { //function to insert the newNode node to the index
    let current = head;
    let idx = 0;
    while (current != null && idx != target - 1) {
        current = current.next;
        idx++;
    }
    let temp = current.next;
    current.next = newNode;
    newNode.next = temp;
}

function traverse(head) {
    let current = head;
    while (current != null) {
        console.log(current.data)
        current = current.next;
    }
}

insertIdx(head, newNode, 2);
traverse(head);
