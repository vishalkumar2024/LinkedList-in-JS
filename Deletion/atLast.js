function Node(data) {
    this.data = data;
    this.next = null
}

let head = new Node(10);
let m1 = new Node(20);
let m2 = new Node(30);
let tail = new Node(40);

head.next = m1;
m1.next = m2;
m2.next = tail;

let current = head;
while (current.next.next != null) {
    current = current.next;
}

current.next = null; //40 wil be deleted

function traversal(head) {
    let current = head;
    while (current != null) {
        console.log(current.data);
        current = current.next;
    }
}

traversal(head);





// Same code but used a separate function to delete the last node //
// function Node(data) {
//     this.data = data;
//     this.next = null
// }

// let head = new Node(10)
// let m1 = new Node(20)
// let m2 = new Node(30)
// let tail = new Node(40)

// head.next = m1
// m1.next = m2
// m2.next = tail;

// function deleteLast(head) {
//     let current = head;
//     while (current.next.next != null) {
//         current = current.next;
//     }
//     current.next = null;
//     return head;
// }
// head=deleteLast(head);

// function traversal(head) {
//     let current = head;
//     while (current != null) {
//         console.log(current.data);
//         current = current.next;
//     }
// }

// traversal(head);
