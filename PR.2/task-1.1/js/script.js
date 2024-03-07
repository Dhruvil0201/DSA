class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const myList = new LinkedList();
myList.addAtBeginning(6);
myList.addAtBeginning(5);
myList.addAtBeginning(4);
myList.addAtBeginning(3);
myList.addAtBeginning(2);
myList.addAtBeginning(1);

console.log(myList);
myList.display();
