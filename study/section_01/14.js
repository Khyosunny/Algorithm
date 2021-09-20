// section 01 >> 가장 긴 문자열

function solution(s) {
  let answer = '',
    max = Number.MIN_SAFE_INTEGER;
  for (let str of s) {
    if (max < str.length) {
      max = str.length;
      answer = str;
    }
  }
  return answer;
}
let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(str));
