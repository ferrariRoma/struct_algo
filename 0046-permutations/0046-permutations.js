const backtrack = (nums, visited, ans, selected) => {
    if(nums.length === selected.length) {
        return ans.push(selected.slice());
    }
    for(let i = 0; i < visited.length; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        selected.push(nums[i]);
        backtrack(nums, visited, ans, selected);
        selected.pop();
        visited[i] = false;
    }
}

const permute = (nums) => {
    const ans = [], selected = [];
    const visited = Array(nums.length).fill(false);
    backtrack(nums, visited, ans, selected);
    return ans;
}