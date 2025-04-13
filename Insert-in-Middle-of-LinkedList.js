
function insertInMiddle(head, x) {
    let insert = new Node(x);

    function totalCount(head, count) { 
        let ptr = head;
        while (ptr != null) { //TC=O(n)
            ptr = ptr.next;
            count++
        }
        return count;
    }
    let totalNode = totalCount(head, 0);

    let mid=Math.floor(totalNode/2);
   console.log(mid)

    let curr = head;
    let idx = 0;
    while (idx<mid ) {
        curr = curr.next;
        idx++;
    }
    let temp = curr.next;
    curr.next = insert;
    insert.next = temp;

    // return head;
    
     curr = head;

    while (curr !== null ) {
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
// let m4 = new Node(5);

head.next = m1;
m1.next = m2;
m2.next = m3;
// m3.next = m4;

console.log(insertInMiddle(head, 12));

// TC= O(2n)
// SC=O(n)
