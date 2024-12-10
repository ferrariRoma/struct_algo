/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    /*
    1. 문제분석
    소문자로 구성된 문자열 s
    한 글자로 이루어진 것이면 문자열은 speical하다고 정의한다.
    abc는 not special
    ddd, zz, f는 special
    
    최소 세 번 발생하는 이런 special한 substring 중
    가장 긴 substring의 길이를 찾아라. 없으면 -1
    
    
    2. 예시분석
    첫 번째 예시
    3번 발생해야 하기 때문에 aaaa나 aaa는 답이 될 수 없다.
    aa로 하면 3번 발생한다.
    a도 4번 발생해서 답이될 수는 있지만, 
    aa가 존재하기 때문에 가장 길지는 않다.
    
    두 번째 예시
    3번 발생하는 것은 없다. 그래서 -1
    
    
    3. 어떤 알고리즘이나 자료구조를 써야할까?
    해시테이블?... 슬라이딩 도어?..
    */
    const leng = s.length, k =[...new Set([...s])];
    let ans = -1,w=1, t = {};
    
    while(w<leng) {
        k.forEach(c => {
            t[c.repeat(w)] = 0;
        })
        
        for(let i=0; i<leng; i++) {
            const sub = s.substring(i, i+w)
            if(!Object.hasOwn(t,sub)) continue;
            t[sub]++;
            if(t[sub] >= 3 && ans < sub.length) ans = sub.length;
        }
        
        t = {};
        w++;
    }
    return ans;
};