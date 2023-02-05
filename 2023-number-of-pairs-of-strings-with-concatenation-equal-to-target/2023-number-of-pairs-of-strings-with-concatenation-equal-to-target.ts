function numOfPairs(nums: string[], target: string): number {
    let answer = 0;
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<nums.length; j++) {
            if(i===j) continue;
            if(nums[i]+nums[j]===target) {
                console.log(nums[i],nums[j]);
                answer+=1;
            };
        }
    }
    return answer;
};