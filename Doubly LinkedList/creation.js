
function forwardtraversal(head) {
    let curr = head;
    let arr1 = []
    while (curr != null) {
        arr1.push(curr.data);
        curr = curr.next;
    }
    return arr1;
}

function backwardtraversal(tail) {
    let curr = tail;
    let arr2=[];
    while (curr != null) {
        arr2.push(curr.data);
        curr = curr.prev;
    }
    return arr2;
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


console.log(forwardtraversal(head));
console.log(backwardtraversal(m2));

