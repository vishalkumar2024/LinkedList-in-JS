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

function searchValue(head, value) {
    let ptr = head;
    let idx = 0;
    while (ptr != null) {
        if (ptr.data === value) return idx;
        else {
            ptr = ptr.next;
            idx++;
        }
    }
    return -1; // if targeted value is not present linkedlist
}
let targetedValue=30
let ans = searchValue(head, targetedValue);
console.log(`The targetedValue ${targetedValue} is present in ${ans}th index`);