/**
 * @param {string[]} words
 * @return {number[]}
 */
class Node {
    constructor(alphabet) {
        this.alphabet = alphabet;
        this.count = 1;
        this.children = {};
    }
}
class Tree {
    constructor() {
        this.root = {children: {}};
    }
    addWord(word) {
        const arraied = [...word];
        let node = this.root;
        for(let i = 0; i < arraied.length; i++) {
            if(!node.children[arraied[i]]) {
                node.children[arraied[i]] = new Node(arraied[i]);
            } else {
                node.children[arraied[i]].count++;
            }
            node = node.children[arraied[i]];
        }
    }
    getCount(word) {
        let sum = 0;
        const arraied = [...word];
        let node = this.root;
        for(let i = 0; i < arraied.length; i++) {
            sum += node.children[arraied[i]].count;
            node = node.children[arraied[i]];
        }
        return sum;
    }
}

var sumPrefixScores = function(words) {
    const t = new Tree();
    const answer = [];
    words.forEach(word => {
        t.addWord(word);
    })
    words.forEach(word => {
        answer.push(t.getCount(word));
    })
    return answer;
};