/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var recoverTree = function (root) {
//   // BST의 규칙에 어긋나는 친구들을 Big, Small에 저장하고,
//   // prev에는 상대적으로 node 왼쪽에 있는 수가 위치하게 된다.
//   // 그래서 prev가 node보다 크다면 27번째 줄에서 big에 prev를 할당하게 되는 것이다.
//   let prev = null,
//     big = null,
//     small = null;

//   const DFS = (node) => {
//     if (!node) return; // node가 없으면 탐색종료
//     DFS(node.left); // 있으면 왼쪽 자식 노드를 호출, 없어도 괜찮다. 어차피 return되고 아래 코드로 이어진다.

//     // 만약 이까지 도달했으면 prev가 비었는지 확인해본다.
//     // null이 아니라면 prev값이 현재 값보다 큰 지 확인해보자. 중위 순회를 했을 때 BST는 오름차순이 된다는 것을 이용하는 것이다
//     if (prev !== null && prev.val > node.val) {
//       // 조건을 만족한다면 small에 node를 할당해주자.
//       small = node;
//       // big에 prev를 할당해서 역전되는 부분들을 교환할 준비를 하자.
//       if (!big) big = prev;
//       // 역전되는 부분을 찾았기 때문에 함수를 종료하고 마지막 줄로 가서 두 수를 교환하게 된다.
//       else return;
//     }

//     // 이까지 왔으면 prev가 비었거나
//     // (그래서 현재 노드로 채워주면 되고
//     // 이후 오른쪽 노드가 없다면 결과적으로는 현재 노드를 안고 부모 노드에서 호출된 DFS함수를 진행하면 된다.
//     // 오른쪽 노드가 있다면 오른쪽 노드에서 계속 탐색하는 것이다.)
//     // prev가 null이 아니라면 분기의 왼쪽 부분에서 역전되는 부분을 찾지 못했다는 것이다.
//     // 그렇기 때문에 prev를 현재 node 값으로 채워주고 오른쪽 부분을 살펴보자.
//     prev = node;
//     DFS(node.right);
//   };
//   DFS(root);
//   [small.val, big.val] = [big.val, small.val];
// };

var recoverTree = (root) => {
  let big, small, pivot;

  const DFS = (node) => {
    if (!node) return;

    if (node.left) DFS(node.left);

    if (pivot && pivot.val > node.val) {
      small = node;
      if (!big) big = pivot;
    }

    pivot = node;
    if (node.right) DFS(node.right);
  };

  DFS(root);
  [big.val, small.val] = [small.val, big.val];
};

// recoverTree([3, 1, 4, null, null, 2]);
// recoverTree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
recoverTree([0, 1, 2, 3, 4, 5, 6]);
