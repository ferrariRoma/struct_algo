var numberOfSubstrings = function(s) {
    let ans = 0;
    const n = s.length;
    
    for(let i = 0; i < n-2; i++) {
        const conditions = {a:false, b:false, c:false}
        let str = s[i];
        conditions[str] = true;
        for(let j = i+1; j <= n; j++) {
            if(conditions.a && conditions.b && conditions.c) {
                ans+=(n-j+1);
                break;
            }
            conditions[s[j]] = true;
            str += s[j];
        }
    }

    return ans;
};