function minOperations(logs: string[]): number {
    const count:string[] = [];
    for(let i of logs) {
        if(i==="../") count.pop();
        else if(i === "./") continue;
        else count.push(i);
    }
    return count.length;
};