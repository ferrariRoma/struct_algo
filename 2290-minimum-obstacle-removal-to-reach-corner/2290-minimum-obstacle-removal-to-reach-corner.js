/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
    /*
    이것도 BFS같음. 큐를 이용해야겠지?
    지난 번은 크기가 정해져 있었는데, 이 문제는 100000개의 m,n constraints가 있으니까
    어쩌면 DP로 풀어야 할지도?
    
    일단 문제는 빈 칸으로 이동을 해서 왼쪽 상단 모서리에서
    오른쪽 하단 모서리로 이동을 해야 합니다.
    근데 이때 장애물이 길을 막고 있어서 갈 수 없는 경우엔,
    장애물을 제거하면서 목적지로 갈 수 있습니다.
    이때 몇 개의 장애물을 제거해야 최소한으로 제거하면서 목적지에 갈 수 있을까요?
    
    m은 세로, n은 가로
    
    일단은 BFS로 풀어봅시다.
    */
    const q = [];
    let count = 0;
    const m = grid.length-1;
    const n = grid[0].length-1;
    const vis = Array.from(Array(m+1), ()=>Array(n+1).fill(-1));
    const dir = [[0,1], [0,-1], [1,0], [-1,0]];
    
    // init
    q.push([0,0]);
    vis[0][0] = 0;
    
    // BFS
    while(q.length>0) {
        const leng = q.length;
        for(let i = 0; i < leng; i++) {
            const [x,y] = q.shift();
            // TODO : 탈출 조건 작성해야 함! 어쩌면 코드 마지막에 해야 할지도??
            // if(n === x && m === y) return ;
            const openPath = [];
            const closePath = [];
            for(let j = 0; j < 4; j++) {
                const nextY = y + dir[j][0];
                const nextX = x + dir[j][1];
                if(nextX >= 0 && nextX <= n && nextY >= 0 && nextY <= m) {
                    const nextPos = [nextX, nextY];
                    if(nextPos[0]===0 && nextPos[1]===0) continue;
                    if(grid[nextY][nextX] === 0 && vis[nextY][nextX] !== 0) {
                        openPath.push(nextPos);
                    } else if(vis[nextY][nextX] !== 0) {
                        closePath.push(nextPos);
                    }
                }
            }
            // if(openPath.length !== 0) {
                openPath.forEach(path=>{
                    if(vis[path[1]][path[0]] > vis[y][x] || vis[path[1]][path[0]] === -1) {
                        vis[path[1]][path[0]] = vis[y][x];
                        q.push(path)
                    };
                });
            // } else if(closePath.legnth !== 0) {
                closePath.forEach(path=>{
                    if(vis[path[1]][path[0]] > vis[y][x] + 1 || vis[path[1]][path[0]] === -1) {
                        vis[path[1]][path[0]] = vis[y][x] + 1;
                        q.push(path)
                    };
                });
            // }
        }
    }
    return vis[m][n];
};