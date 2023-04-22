class QueueNode {
  public next: QueueNode|null = null
  constructor(public val: number) {};
}

class MyQueue {
  public firstNode:QueueNode|null = null;
  public lastNode:QueueNode|null = null;
  public size = 0;

  dequeue(): number | null {
    if(!this.firstNode || !this.lastNode || this.size===0) return null;

    const oldFirst = this.firstNode;
    this.firstNode = this.firstNode.next;
    this.size--;
    
    if(this.size===0) {
      this.firstNode = null;
      this.lastNode = null;
    }

    return oldFirst.val;
  }

  enqueue(val:number):void {
    const newNode = new QueueNode(val);

    if(!this.firstNode || !this.lastNode || this.size === 0) {
      this.firstNode = newNode;
      this.lastNode = newNode;
      this.size = 1;
    } else {
      this.lastNode.next = newNode;
      this.lastNode = newNode;
      this.size++;
    }
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  get getFirst(): number|null {
    return this.firstNode?.val ?? null;
  }
}

class MyStack {
  public stack = new MyQueue();

  push(val: number):void {
    const subQ = new MyQueue();

    const Length = this.stack.size;
    let temp: number;

    for(let i = 0; i < Length; i++) {
      temp = this.stack.dequeue() as number;
      subQ.enqueue(temp);
    }

    this.stack.enqueue(val);
    for(let i = 0; i < Length; i++) {
      temp = subQ.dequeue() as number;
      this.stack.enqueue(temp);
    }
  }

  pop(): number|null {
    return this.stack.dequeue();
  }

  top(): number | null {
    return this.stack.getFirst;
  }

  empty(): boolean {
    return this.stack.isEmpty();
  }
}