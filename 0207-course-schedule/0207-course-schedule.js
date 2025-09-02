/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
 const graph = Array.from({length: numCourses}, () => []);
 for(const [a, b] of prerequisites) {
     graph[b].push(a);
 }
 // 상태 배열 0 미방문 1 방문 2 완료
 const state = new Array(numCourses).fill(0);
 const dfs = (course) => {
  if(state[course] === 1) return false;
  else if(state[course] === 2) return true;
  state[course] = 1;
  for(const next of graph[course]) {
   if(!dfs(next)) return false;
  }
  // 하나의 그래프를 다 통과 한 거면 완료로 상태 수정
  state[course] = 2;
  return true;
 }
 for(let i = 0; i < numCourses; i++) {
  if(state[i] === 0 && !dfs(i)) return false;
 }
 return true;
};