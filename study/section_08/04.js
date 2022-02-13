// section 08 재귀함수와 완전탐색(깊이우선탐색, DFS) >> 부분집합 구하기(DFS)

function solution(n) {
  let answer = [];
  let checkList = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (checkList[i] === 1) {
          tmp += i + ' ';
        }
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      checkList[v] = 1;
      DFS(v + 1);
      checkList[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);

  return answer;
}

console.log(solution(3));
