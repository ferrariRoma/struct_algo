class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.node = null;
    this.length = 0;
  }

  push(data) {
    // 노드가 아예 없을 때
    if (!this.length) {
      this.length += 1;
      return (this.node = new Node(data));
    }
    // 하나라도 있으면 private메소드로 end point 탐색 후 삽입
    return this._setNode(this.node, data);
  }

  _setNode(node, data) {
    // 끝을 찾았을 때
    if (!node.next) {
      this.length += 1;
      return (node.next = new Node(data));
    }
    // 끝이 아닐 때는 재귀로 탐색
    return this._setNode(node.next, data);
  }

  pop() {
    return this._removeNode(this.node);
  }

  _removeNode(node) {
    if (!node.next.next) {
      const popValue = node.next.data;
      this.length -= 1;
      node.next = null;
      return popValue;
    }
    return this._removeNode(node.next);
  }
}

const stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(7);
console.log(stack); // 2, 4, 7
console.log(stack.node.next);
console.log(stack.pop()); // 7
console.log(stack); // 2, 4
