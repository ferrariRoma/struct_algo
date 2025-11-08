/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const table = new Map();
    // name ain't assure identity perfectly -> use index!
    for(let i = 0; i < accounts.length; i++) {
        for(let j = 1; j < accounts[i].length; j++) {
            if(!table.has(accounts[i][j])) {
                table.set(accounts[i][j], []);
            }
            const emails = table.get(accounts[i][j]);
            emails.push(i);
        }
    }

    const visit = Array(accounts.length).fill(false);
    const ans = [];
    for(let i = 0; i < accounts.length; i++) {
        if(visit[i]) continue;

        const name = accounts[i][0];
        visit[i] = true;
        // this is used to iterate table variable that sorted by emails.
        // if you didn't get it let's just pass next line! it will soon clearer next below.
        const stack = [i];
        const emails = new Set();
        while(stack.length) {
            const currIdx = stack.pop();
            // this step, we're gonna push all emails for accounts' currIdx to merge
            for(let j = 1; j < accounts[currIdx].length; j++) {
                emails.add(accounts[currIdx][j]);
                // get all indices having same email from table variable
                const indices = table.get(accounts[currIdx][j]) ?? [];
                for(const index of indices) {
                    if(visit[index]) continue;
                    visit[index] = true;
                    stack.push(index);
                }
            }
        }
        ans.push([name, ...Array.from(emails).sort()]);
    }
    return ans;
};