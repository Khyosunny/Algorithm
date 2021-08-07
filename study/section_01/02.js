// section 01 >> 삼각형 판별하기

function solution(a, b, c) {
  let answer = "YES",
    max;
  const total = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (total - max > max) return answer;
  else return (answer = "NO");
}

console.log(solution(6, 7, 11));
