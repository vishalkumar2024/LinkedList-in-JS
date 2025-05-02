
function insertInMiddle(head, x) {   //Not solved yet
    let insert = new Node(x);
    let mid = -1;
    function totalCount(head, count) {
        let ptr = head;
        while (ptr != null) { //TC=O(n)
            ptr = ptr.next;
            count++
        }
        return count;
    }
    if (totalCount(head, 1) == 0) {
        return x
    }
    
    let totalNode = totalCount(head, 1) - 1;

    if ((totalNode / 2) % 1 === 0) {
        mid = totalNode / 2;
    }
    else {
        mid = Math.ceil(totalNode / 2);
    }

    let curr = head;
    let idx = 1;
    while (idx < mid) {
        curr = curr.next;
        idx++;
    }
    let temp = curr.next;
    curr.next = insert;
    insert.next = temp;

    // return head;

    curr = head;

    while (curr !== null) {
        console.log(curr.data)
        curr = curr.next
    }
}

function Node(data) {
    this.data = data;
    this.next = null
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(4);
let m4 = new Node(5);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;

console.log(insertInMiddle(head, 12));


