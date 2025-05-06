//Leetcode 328

function oddEvenList(head) {
    if (!head || !head.next) return head;  //if only two nodes are there return the head

    let oddHead = new Node(head.data);  //List for odd indices
    let evenHead = new Node(head.next.data);  // list for even indices
    let ptr1 = oddHead;
    let ptr2 = evenHead;

    let curr = head.next.next;
    let idx = 3;

    while (curr) {  //TC=O(n)
        let newNode = new Node(curr.data);
        if (idx % 2 !== 0) {
            ptr1.next = newNode;
            ptr1 = ptr1.next;
        } else {
            ptr2.next = newNode;
            ptr2 = ptr2.next;
        }
        curr = curr.next;
        idx++;
    }

    // Connect the odd list to the even list
    ptr1.next = evenHead;
    ptr2.next = null;  // terminate the even list

    // return oddHead;

    curr=oddHead;
    while(curr){
        console.log(curr.data)
        curr=curr.next
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
m4.next = null;

console.log(oddEvenList(head));

// TC=O(n)
// SC=O(n)