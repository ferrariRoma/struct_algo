/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    /*
    가장 작은 subarray를 제거해서 감소하지 않는 정렬된 배열을 만드세요!
    가장 작은 subarray의 길이를 구하세요!
    */
    const l = arr.length;
    let left=0, right=l-1;
    while(left<l && arr[left]<=arr[left+1]) {
        left++;
    }
    if(left===l-1) return 0;
    while(right>0 && arr[right-1]<=arr[right]) {
        right--;
    }
    
    let ans = Math.min(l-left-1,right), i=0, j=right;
    while(i<=left && j<l) {
        if(arr[i]<=arr[j]) {
            ans = Math.min(j-i-1, ans);
            i++;
        } else {
            j++;
        }
    }
    return ans;
};