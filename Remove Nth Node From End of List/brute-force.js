//Leetcode 19

function  removeNthFromEnd(head, n) {

    function reverseList(head) {  //Function to reverse the LL
        var prevNode = null;
        var currNode = head;

        while (currNode != null) {   //TC=O(n)
            var nextNode = currNode.next;
            currNode.next = prevNode;

            //update
            prevNode = currNode;
            currNode = nextNode;
        }
        return prevNode;
    }

    let reversed = reverseList(head); //Firstly reverse the LL

    function deleteList(head, x) { //Function to delete the node at n in LL
        if (x == 1) {
            return head = head.next;
        }

        let current = head;
        let idx = 1;
        while (current.next != null && idx < x - 1) {  // TC=O(n)
            current = current.next;
            idx++;
        }

        if (current !== null && current.next !== null) {
            current.next = current.next.next;
        }
        return head
    }

    let deletedNode=deleteList(reversed, n) //Secondly delete the node at n

    // return reverseList(deletedNode)  // lastly return the reversed LL

    curr=reverseList(deletedNode);
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

console.log(removeNthFromEnd(head, 3));

// TC=O(3n)
// SC=O(1)