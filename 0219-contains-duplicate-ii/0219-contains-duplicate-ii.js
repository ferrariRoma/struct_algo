/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}

1차 풀이
-기본 idea-
filter이용해서 중복되는 거 있으면 그게 몇 번째 index에 있는지 구해보자.
-고려할 것-
1. ex3처럼 중복되는 것들이 여러 개 나타날 수도 있다. 이 경우에는 어떻게 해야 하나.
2. ex2처럼 같은 게 세 개 이상 존재할 수도 있다. 이 경우는 어떻게 해야 하나.
 */
var containsNearbyDuplicate = function(nums, k) {
    const pot = new Map();
    nums.forEach((el,idx)=>{
        if(pot.has(el)) {
            let prevValue = pot.get(el);
            pot.set(el, [prevValue,idx].flat(1))
        } else {
            pot.set(el,idx);
        }
    })
    
    /**
     * @param {Map} pot
     * @return {boolean}

     각 key가 Array를 value로 가지고 있는지 확인을 해서 그 수가 두 개 이상의 요소인지 검증한다.
     또 Array가 여러 개이면 두 개 이상인 요소로 판단, 문제의 조건을 계속 확인한다.
     즉, 예외 사항 두 개를 해결할 수 있음
    */
    const checkArary = (pot) => {
        for(let [key, value] of pot){
            if(value instanceof Array){
                // 그 Array 요소들 사이의 차가 k보다 같거나 작은지 확인 
                let idx1=0, idx2=1;
                for(let j = 0; j < value.length-1; j++) {
                    if(Math.abs(value[idx1]-value[idx2]) <= k) {
                        return true;
                    };
                    idx1++;
                    idx2++;
                }
            }
        }
        return false;
    }

    return checkArary(pot); 
};