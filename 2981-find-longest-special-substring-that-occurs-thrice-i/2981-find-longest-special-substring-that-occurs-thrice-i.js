/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    let l=0, r=s.length-1, max=-1;
    
    const checkSpecial = (s,w) => {
        let l=0;
        const t = new Map();
        for(let r=0;r<s.length;r++) {
            if(r>0&&s[r]!=s[r-1]) l = r;
            if(r-l+1 == w) {
                t.set(s[r], (t.get(s[r]) ?? 0)+1);
                if(t.get(s[r]) >= 3) return true;
                l++
            }
        }
        return false;
    }
    
    while(l<r) {
        const mid = Math.floor((l+r)/2);
        if(checkSpecial(s,mid)) {
            l = mid+1;
            max = Math.max(mid,max);
        } else {
            r = mid;
        }
    }
    return max;
};