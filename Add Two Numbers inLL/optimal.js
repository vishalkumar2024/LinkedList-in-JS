// leetcode 2

function addTwoNumbers(L1, L2) {

    let temp1 = L1;
    let temp2 = L2;

    let newList = new Node(-1);  //SC=O(max(m,n))
    let curr = newList

    let carry = 0;
    while (temp1 || temp2) {  //TC=O(max(m,n))
        let sum = carry;
        if (temp1) {
            sum += temp1.data;
        }
        if (temp2) {
            sum += temp2.data;
        }
        let newNode =new Node(sum % 10);
        carry = Math.floor(sum / 10)

        curr.next = newNode;
        curr = curr.next;

        if (temp1) temp1=temp1.next;
        if (temp2) temp2=temp2.next;
    }
    if(carry) {
        let newNode = new Node(carry);
        curr.next=newNode
    }
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

//TC=O(max(m,n))
//SC=O(max(m,n))

