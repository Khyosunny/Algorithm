// section 03 문자열 탐색 >> 숫자만 추출

function solution(str) {
  let answer = '';

  for (let s of str) {
    if (!isNaN(s)) answer += s;
  }

  return parseInt(answer);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
