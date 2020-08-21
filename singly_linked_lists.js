// DATA STRUCTURES

// a singly linked list is just a collection of nodes
// every node stores a piece of data - val and a reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// let first = new Node('Hi');
// first.next = new Node('Buongiorno');
// first.next.next = new Node('Hola');
// first.next.next.next = new Node('Halo');

// this is not ideal since it's repetitive
// let's define a Singly Linked class that will take care of the logic

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // method that pushes a node at the end of a list

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // method that removes the last item of the list

    pop(){
      if (this.length === 0) return undefined;
      var current = this.head;
      var newTail = current;
      while(current.next){
          newTail = current;
          current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;

      // if there is one item there is a problem because we are never setting the head and the tail to be null
      // we can do that by setting the tail and head to null when the list length is 0

      if(this.length === 0){
          this.tail = null;
          this.head = null;
      }
      return current;
    }

    // method that removes the first element of the list

    shift(){
      if(!this.head) return undefined;
      var removeHead = this.head;
      this.head = removeHead.next;
      this.length--;
      if(this.length === 0){
          this.tail = null;
      }
      return removeHead;
    }

    // method that ads a node at the beginning of the list

    unshift(val) {
        let newElem = new Node(val);
        if(!this.head){
            this.head = newElem;
            this.tail = this.head;
        } else {
            newElem.next = this.head;
            this.head = newElem;
        }
        this.length++;
        return this;
    }

    // method that gets the element at a specific index in the list

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next
            counter++;
        }
        return current;
    }

    // methods that updates an element at a specific index in our list

    set(index,value){
        var currentVal = this.get(index);
        if (currentVal) {
            currentVal.val = value;
            return true;
        }
        return false;
    }

    // method that inserts a new node at a specific index

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val); // with the !! we return a boolean
        if(index === 0) return !!this.unshift(val);

        var newNode = new Node(val)
        var prev = this.get(index-1);
        var tempNode = prev.next;
        prev.next = newNode;
        newNode.next = tempNode;
        this.length++;
        return true;
    }

    // method that removes a node at a specific index
    // very common interview question

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();

        var prev = this.get(index-1);
        var removedNode = prev.next;
        prev.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    // method that reverses the list in place, no copy

    reverse(){
       var node = this.head;
       this.head = this.tail;
       this.tail = node;
       var prev = null;
       var next;
       for(var i = 0; i < this.length; i++){
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;
       }
       return this;
    }


}

let list = new SinglyLinkedList();
list.push('john');
list.push('ringo');
list.push('george');

