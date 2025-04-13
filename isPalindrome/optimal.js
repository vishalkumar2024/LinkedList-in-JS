//Leetcode 206

function reverseList(head) {
        var slow = head;
        var fast = head;
    
        // Find the middle of the linked list
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
    
        // Reverse the second half of the linked list
        var mid = slow.next;
        var prev = null;
        while (mid !== null) {
            var temp = mid.next;
            mid.next = prev;
            prev = mid;
            mid = temp;
        }
    
        // Compare the first half with the reversed second half
        var mids = prev;
        while (head !== null && mids !== null) {
            if (head.val !== mids.val) {
                return false;
            }
            head = head.next;
            mids = mids.next;
        }
    
        return true;
    };
    
function Node(val) {
    this.val = val;
    this.next = null
}

let head = new Node(1);
let m1 = new Node(2);
let m2 = new Node(3);
let m3 = new Node(2);
let m4 = new Node(1);

head.next = m1;
m1.next = m2;
m2.next = m3;
m3.next = m4;

console.log(reverseList(head));

// TC= O(2n)
// SC=O(n)
