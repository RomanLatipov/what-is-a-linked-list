class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  iterate(func) {
    let temp = this.head;

    while (temp) {
      const result = func(temp);

      if (result === true) {
        return temp;
      }
      
      temp = temp.next;
    }
    return this.head
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    function print(node) {
      console.log(node.value);
    }
    this.iterate(print);
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let found = null;
    function find(node) {
      if (node.value === target) {
        found = node;
        return true;
      }
    }
    this.iterate(find);
    return found;
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    node.next = this.head;
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    if (this.head === null) {
      this.head = node;
      return;
    }

    function add(nextNode) {
      if(nextNode.next === null) {
        nextNode.next = node;
        return true;
      }
    }
    this.iterate(add);
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    if (this.head === null)
      return;

    let first = this.head;
    this.head = this.head.next;
    return first;
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    if (this.head === null)
      return;
    if (this.head.next === null)
      this.removeFirst();

    let last = null;
    function remove(node) {
      if (node.next.next === null) {
        last = node.next;
        node.next = null;
        return true;
      }
    }
    this.iterate(remove);
    return last;
  }

  // replace the node at the given index with the given node
  replace(idx, node) {
    if (idx === 0) {
      this.removeFirst();
      this.addFirst(node);
    }
    let count = 1;
    function replace(nextNode) {
      if(count+1 === idx) {
        node.next = nextNode.next.next;
        nextNode.next = node;        
      }
    }
    this.iterate(replace);
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {
    if (idx === 0) {
      this.addFirst(node);
      return;
    }

    let count = 1;
    function insert(nextNode) {
      if (count+1 === idx) {
        const old = nextNode.next;
        nextNode.next = node;
        node.next = old;

        return true;
      }
    }
    this.iterate(insert);
  }

  // remove the node at the given index, and return it
  remove(idx) {
    if (idx === 0) {
      return this.removeFirst();
    }

    let old = null;

    function remove(node) {
      if (count+1 === idx) {
        old = node.next;
        node.next = node.next.next;

        return true;
      }
    }
    this.iterate(remove);
  }

  clear() {
    this.head = null;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
  // add your own tests in here
  
}

module.exports = {
  Node, LinkedList
};
