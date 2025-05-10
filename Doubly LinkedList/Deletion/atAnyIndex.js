
function deletion(head, target) {
    let current = head;
    let idx = 1;
    while (current.next != null && idx != target - 1) {
        current = current.next;
        idx++
    }
    if (current.next == null) {
        let temp = current.prev
        temp.next = null;
        current.prev = null;

        return head;
    }
    let temp = current.next;
    let temp2 = current.next.next

    current.next = temp2;
    temp.prev = current;

    temp.prev = null;
    temp.next = null;

    function traversal(head) {
        let current = head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
    traversal(head)
}


function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(30);
let m3 = new Node(4);

head.prev = null;
head.next = m1;
m1.prev = head;
m1.next = m2;
m2.prev = m1;
m2.next = m3;
m3.prev = m2;
m3.next = null;


console.log(deletion(head, 2));

