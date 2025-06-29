// You are given a linked list where each element in the list is a node and have an 
// integer data. You need to add 1 to the number formed by concatinating all the
//  list node numbers together and return the head of the modified linked list. 

function addOne(head) {
    //Function to reverse the LL
    function reverseList(head) {
        var prevNode = null;
        var currNode = head;

        while (currNode != null) {  //TC=O(n)
            var nextNode = currNode.next;
            currNode.next = prevNode;

            //update
            prevNode = currNode;
            currNode = nextNode;
        }
        return prevNode;
    }

    head = reverseList(head);
    let carry = 1;
    let curr = head;
    while (curr) {  //TC=O(n)
        let total=curr.data+carry;
        curr.data=total%10;
        carry=total>=10?1:0;
        curr=curr.next;
    }
    if (carry > 0) {
        let newNode = new Node(carry);
        head=reverseList(head)
        newNode.next = head;
        return newNode
    }
    return reverseList(head);
}

function Node(data) {
    this.data = data;
    this.next = null
}

let head = new Node(9);
let m1 = new Node(9);
let m2 = new Node(9);


head.next = m1;
m1.next = null;
m2.next = null;

console.log(addOne(head));

// TC=O(3n)
// SC=O(1)