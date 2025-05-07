// leetcode 2

function addTwoNumbers(L1, L2) {

    let curr = L1;
    let s1 = "";   // O(m)
    while (curr) {       // O(m)
        s1 += curr.data;
        curr = curr.next
    }

    curr = L2
    let s2 = "";  //SC=O(n)
    while (curr) {       // O(n)
        s2 += curr.data;
        curr = curr.next
    }

    let sum = parseInt(s1) + parseInt(s2);
    if (sum == 0) { return L1.head }

    let newList = new Node(0); //SC=O(k)
    let temp = newList;
    let digit = 0;

    while (sum !== 0) {  //TC=O(k)
        digit = sum % 10;
        let newNode = new Node(digit);
        temp.next = newNode;
        temp = temp.next;
        sum = Math.floor(sum / 10)
    }
    temp.next = null;

    return newList.next;
}

function Node(data) {
    this.data = data;
    this.next = null;
}
let head1 = new Node(2);
let m1 = new Node(4);
let m2 = new Node(3);


head1.next = m1;
m1.next = m2;
m2.next = null;

let head2 = new Node(5);
let n1 = new Node(6);
let n2 = new Node(4);

head2.next = n1;
n1.next = n2;
n2.next = null;

console.log(addTwoNumbers(head1, head2))

// TC = O(m + n + k)  : k = length of sum
// SC = O((m + n + k))

