// section 08 재귀함수와 완전탐색(깊이우선탐색, DFS) >> 바둑이 승차(DFS)

function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
