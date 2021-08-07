// section 01 >> 1 부터 N가지 합 출력하기

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(6));
