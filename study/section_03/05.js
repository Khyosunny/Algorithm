// section 03 문자열 탐색 >> 문자열 압축

function solution(s) {
  let answer = '';
  let count = 1;
  s = s + ' ';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      answer += s[i];
      if (count > 1) answer += String(count);
      count = 1;
    }
  }

  return answer;
}

let str = 'KKHSSSSSSSEE';
console.log(solution(str));
