/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dict = new Set(wordDict);
    const memo = new Map();
    const dfs = (i) => {
        if(n === i) return true; // 문자열 완성
        if(memo.has(i)) return memo.get(i); // 방문한 적이 있으면 memo 결과 사용
        // dict iterate하면서 각 단어별로 가능한 조합 탐색
        for(const w of dict) {
            if(i + w.length <= n && s.startsWith(w, i)) {
                if(dfs(i + w.length)) {
                    memo.set(i, true);
                    return true;
                }
            }
        }
        memo.set(i, false);
        return false;
    }
    return dfs(0);
};