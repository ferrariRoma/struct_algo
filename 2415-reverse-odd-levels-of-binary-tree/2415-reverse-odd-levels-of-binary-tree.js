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
 * @return {TreeNode}
 */
var reverseOddLevels = function(root) {
    /*
    1. 문제분석
    이진트리.
    트리의 홀수 레벨의 각각의 노드 값들을 뒤집어라.
    
    
    2. 예시분석
    root = [2,3,5,8,13,21,34]
    Output: [2,5,3,8,13,21,34]
    
    3. 분석한 것을 구현하기 위해 사용해야 하는 알고리즘, 자료구조
    BFS를 해야 겠는데?
    */
    let s1 = [root];
    let level = 0;
    while(s1.length) {
        const s2 = [];
        for(let i=0; i<s1.length; i++) {
            // exchange value if it is odd level
            if(level%2===1 && i<Math.floor(s1.length/2)) 
                [s1[i].val, s1[s1.length-1-i].val] = [s1[s1.length-1-i].val, s1[i].val];
            if(s1[i].left) {
                s2.push(s1[i].left);
                s2.push(s1[i].right);
            }
        }
        s1 = s2;
        level++;
    };
    return root;
};