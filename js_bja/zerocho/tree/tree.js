// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }

//   insert(data) {
//     data <= this.data ? this._toLeft(data) : this._toRight(data);
//   }

//   // private는 _를 쓴다.
//   _toLeft(data) {
//     this.left ? this.left.insert(data) : (this.left = new Node(data));
//   }

//   _toRight(data) {
//     this.right ? this.right.insert(data) : (this.right = new Node(data));
//   }

//   contains(data) {
//     if (this.data === data) return this;
//     return data <= this.data ? this._findLeft(data) : this._findRight(data);
//   }

//   _findLeft(data) {
//     return this.left ? this.left.contains(data) : null;
//   }

//   _findRight(data) {
//     return this.right ? this.right.contains(data) : null;
//   }
// }

// /*
// min 상한선, max 하한선 => 이유는 root node의 data가 뭐가 들어올지 모르기 때문에 하한선을 무한대로 하는 것이다.
// 즉 root node로 무한대가 들어올 수도 있다는 것이고 그것 보다 작은 값은 왼쪽 자식 노드가 되는 것이다.

// max는 하한선인데 root node로 -Infinite가 들어온다면 그거 보다는
// 높은 data가 와야 하기 때문에 max의 default로 -Infinite로 잡는 것이다.
// */
// function isValidate(node, min = Infinity, max = -Infinity) {
//   // node가 null 일 때
//   if (!node) return false;
//   if (max < node.data && node.data <= min) {
//     // TODO : Infinity일 필요가 있을까? default가 Infinity인 건 알겠는데, 그 다음 재귀를 돌릴 떈 그럴 필요가 없지 않을까?
//     // 왼쪽 isValidate, 이때 왼쪽이니까 min 상한선을 node.data로 업데이트 한다.
//     // 그래서 왼쪽이 Infinite보다 작으면(node.data<=min), 그리고 left node가 있다면 다시 isValidate를 해서 계속 유효성 검사를 해주는 것이다.
//     if (node.left) return isValidate(node.left, node.data, max);
//     // 오른쪽 isValidate, 이떄 오른쪽이니까 max 하한선을 node.data로 업데이트 한다.
//     // 그래서 오른쪽이 Infinite보다 크면(node.data>max), 그리고 node.right가 있으면 다시 isValidate를 해서 유효성 검사를 해주는 것이다.
//     if (node.right) return isValidate(node.right, max, node.data);
//   } else {
//     return false; // 한 번이라도 조건을 충족하지 못하면 콜스택 타고 올라가서 false를 return
//   }
//   return true; // 위에서 한 번도 false 안 걸리면 최종적으로는 이진 탐색 트리의 조건을 충족한 것이기 떄문에 true를 return
// }

// const newNode = new Node(10);
// newNode.insert(5);
// newNode.insert(111);
// newNode.insert(7);
// console.log(newNode);
// console.log(isValidate(newNode));

/**
 * insert : data를 삽입하는 메소드
 * _toRight : 데이터를 오른쪽 자식 노드로 삽입하는 메소드
 * _toLeft : 데이터를 왼쪽 자식 노드로 삽입하는 메소드
 * search : 탐색하는 메소드
 * _findRight : 오른쪽 노드로 탐색
 * _findLeft : 왼쪽 노드로 탐색
 */
class Node {
  constructor(data) {
    this.right = null;
    this.left = null;
    this.data = data;
  }

  insert(data) {
    return data <= this.data ? this._toLeft(data) : this._toRight(data);
  }

  _toLeft(data) {
    return this.left ? this.left.insert(data) : (this.left = new Node(data));
  }

  _toRight(data) {
    return this.right ? this.right.insert(data) : (this.right = new Node(data));
  }

  findNode(data) {
    if (this.data === data) return this;
    return data <= this.data ? this._findLeft(data) : this._findRight(data);
  }

  // TODO : 탐색을 해서 해당 노드가 나오면 해당 노드에 자식 노드가 있을 경우에는 그 자식 노드들을
  // removeNode(data){

  // }

  _findLeft(data) {
    return this.left ? this.left.findNode(data) : null;
  }

  _findRight(data) {
    return this.right ? this.right.findNode(data) : null;
  }
}

const newNode = new Node(20);
newNode.insert(32);
newNode.insert(12);
newNode.insert(15);
newNode.insert(7);
console.log(newNode);
