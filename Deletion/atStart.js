
function node(data) {
    this.data = data;
    this.next = null;
}

let head = new node(12)
let mid = new node(18);
let tail = new node(24);
head.next = mid;
mid.next = tail;

head=head.next // 12 will be deleted

function traverse(head) {
    let current = head;
    while (current != null) {
        console.log(current.data)
        current = current.next;
    }
}
traverse(head);







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

