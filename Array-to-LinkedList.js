// Given an array of integer arr. Your task is to construct the linked list from 
// arr & return the head of the linked list.

function arrayToList(arr) {
    let head = new Node(arr[0]);
    let ptr = head;
    for (let i = 1; i < arr.length; i++) { //TC=O(n)
        let n = new Node(arr[i])
        ptr.next = n;
        ptr = ptr.next;
    }
    ptr.next = null;
    return head;
}

function Node(data) {
    this.data = data;
    this.next = null
}

let arr = [1, 2, 3, 4, 5]

console.log(arrayToList(arr));

// TC=O(n)
// SC=O(n)