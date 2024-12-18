/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    /*
    1. 문제 분석
    할인이 있음. 인덱스 i 아이템을 사면, 
    i보다 큰 인덱스 j 아이템 가격이 인덱스 i 가격보다 같거나 작을 때,
    한 번 인덱스 j만큼의 할인을 받게 된다.
    
    2. 예시 분석
    Input
    [8,7,4,2,8,1,7,7,10,1]
    Output
    [1,3,2,1,7,1,0,7,10,1]
    Expected
    [1,3,2,1,7,0,0,6,9,1]
    
    3. 분석한 것을 코드로 나타내기 위해 어떤 자료구조와 알고리즘을 사용해야 할까?
    배열 순회? 투 포인터
    
    for of를 사용 안 한 이유는 인덱스가 필요해서
    */
    let i=0, j=1;
    while(i!==prices.length-1) {
        if(j===prices.length) {
            i++;
            j=i+1;
            continue;
        }
        if(prices[j]<=prices[i]) {
            prices[i]-=prices[j];
            i++;
            j=i+1;
            continue;
        }
        j++;
    }
    return prices;
};