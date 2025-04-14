
function modularNode(head, x) {
    let ptr = head;
    let idx = 1;
    let arr = []
    while (ptr != null) {
        if (idx % x === 0) {
            arr.push(ptr.data)
        }
        ptr = ptr.next;
        idx++;
    }
    console.log(arr)
    return arr.length > 0 ? arr[arr.length-1] : -1;
}

function Node(data) {
    this.data = data;
    this.next = null;
}

let head = new Node(4);
let m1 = new Node(5);
// let m2 = new Node(3);
// let m3 = new Node(4);
// let m4 = new Node(5);
// let m5 = new Node(6);
// let m6 = new Node(7);

head.next = m1;
// m1.next = m2;
// m2.next = m3;
// m3.next = m4;
// m4.next = m5;
// m5.next = m6;

console.log(modularNode(head, 1));
