/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n;
        while(left<right) {
            let mid = Math.floor((left+right)/2);
            if(isBadVersion(mid)) {
                // QA 통과 실패
                right = mid;
            } else {
                // QA 통과 - 이후 버전으로 가야 하기 때문에 left를 밀어야.
                left = mid+1;
            }
        }
        return left;
    };
};