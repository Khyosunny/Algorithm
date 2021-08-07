// section 01 >> 세 수 중 최솟값

function solution(a, b, c) {
  let answer;
  if (a > b) answer = b;
  else answer = a;
  if (answer > c) return c;
  else return answer;
}

console.log(solution(8, 2, 6));
