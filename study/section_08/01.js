// section 08 재귀함수와 완전탐색(깊이우선탐색, DFS) >> 재귀함수

function solution(n) {
  function DFS(number) {
    if (number === 0) return;
    else {
      DFS(number - 1);
      console.log(number);
    }
  }
  DFS(n);
}

solution(3);
