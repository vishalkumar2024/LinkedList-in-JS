function deletion(head) {

    let temp = head.next;
    head.next = null;
    head = temp // 12 will be deleted

    let current = head;
    while (current != null) {
        console.log(current.data)
        current = current.next;
    }
}
function node(data) {
    this.data = data;
    this.next = null;
}

let head = new node(10)
let n1 = new node(20);
let n2 = new node(30);
let n3 = new node(40);
let n4 = new node(50);

head.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = null;


deletion(head)







// Same code but used a separate function to delete the first node //
// function node(data) {
//     this.data = data;
//     this.next = null;
// }

// let head = new node(12)
// let mid = new node(18);
// let tail = new node(24);
// head.next = mid;
// mid.next = tail;

// function deletion(head) {
//     return head.next;
// }

// head = deletion(head); // 12 will be deleted

// function traverse(head) {
//     let current = head;
//     while (current != null) {
//         console.log(current.data)
//         current = current.next;
//     }
// }

// traverse(head);

