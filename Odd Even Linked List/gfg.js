// Given a link list, modify the list such that all the even numbers appear before
//  all the odd numbers in the modified list. The order of appearance of numbers
//  within each segregation should be the same as that in the original list

function oddEvenList(head) {
    let evenNode = new Node(0)
    let oddNode = new Node(0)

    let odd = oddNode;
    let even = evenNode;

    let curr = head;
    while (curr) {
        let newNode = new Node(curr.data);

        if (curr.data % 2 == 0) {
            even.next = newNode;
            even = even.next;
        }
        else {
            odd.next = newNode;
            odd = odd.next;
        }

        curr = curr.next;
    }

    even.next = oddNode.next

    // return evenNode.next

    curr = evenNode.next;
    while (curr) {
        console.log(curr.data)
        curr = curr.next
    }
}

function Node(data) {
    this.data = data;
    this.next = null
}

let head = new Node(17);
let m1 = new Node(15);
let m2 = new Node(8);
let m3 = new Node(9);
let m4 = new Node(2);
let m5 = new Node(4);
let m6 = new Node(6);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = m5;
m5.next = m6;
m6.next = null;

console.log(oddEvenList(head));

// TC=O(n)
// SC=O(n)