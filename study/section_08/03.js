// section 08 재귀함수와 완전탐색(깊이우선탐색, DFS) >> 이진트리 순회(깊이우선탐색)

// console.log가 윗줄이면 전위순회, 중간이면 중위순회, 아랫줄이면 후위순회.
// 전위순회 - 부 왼 오
// 중위순회 - 왼 부 오
// 후위순회 - 왼 오 부
function solution(n) {
  let answer = '';

  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
