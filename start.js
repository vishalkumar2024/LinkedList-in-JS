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











// // Inserting new node to the ending //
function node(data) {
    this.data = data;
    this.next = null;
}

let head = new node(12)
let mid = new node(18);
let tail = new node(24);
head.next=mid;
mid.next=tail;

while()


console.log(head)
